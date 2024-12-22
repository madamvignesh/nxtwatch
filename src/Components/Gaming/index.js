import {Component} from 'react'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../Content/ThemeAndVideoContext'
import CategoryList from '../CategoryList'
import Videos from '../Videos'
import Header from '../Header'
import {
  GamingContainer,
  VideoContainer,
  CoverContainer,
  GamingPage,
  TitleContainer,
  TitleText,
  WebsiteLogo,
  GetItButton,
} from './styledComponents'

const apiCallStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initially: 'INITIALLY',
  isProgress: 'ISPROGRESS',
}

class Gaming extends Component {
  state = {
    videos: [],
    currentStatus: apiCallStatus.initially,
  }

  componentDidMount() {
    this.fetchGamingDetails()
  }

  fetchGamingDetails = async () => {
    this.setState({currentStatus: apiCallStatus.isProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/gaming`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
      }))
      this.setState({videos: updatedData, currentStatus: apiCallStatus.success})
    } else {
      this.setState({currentStatus: apiCallStatus.failure})
    }
  }

  displayGaming = () => {
    const {videos} = this.state
    return <Videos videos={videos} />
  }

  ErrorPage = () => (
    <div className="error-container">
      <h1>Error</h1>
      <p>Something went wrong! Please try again.</p>
    </div>
  )

  getGamingDetails = () => {
    const {currentStatus} = this.state
    switch (currentStatus) {
      case apiCallStatus.isProgress:
        return <h1>Loading...</h1>
      case apiCallStatus.failure:
        return this.ErrorPage()
      case apiCallStatus.success:
        return this.displayGaming()
      default:
        return null
    }
  }

  render() {
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000000' : '#ffffff'
          const color = isDarkTheme ? '#f9f9f9' : '#212121'
          return (
            <GamingContainer bgColor={bgColor} color={color}>
              <Header />
              <CategoryList />
              <GamingPage>
                <CoverContainer>
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <p>Buy Nxt Watch Premium Prepaid plans with UPI </p>
                  <GetItButton>GET IT NOW</GetItButton>
                </CoverContainer>
                <TitleContainer>
                  <TitleText>Gaming Videos</TitleText>
                </TitleContainer>
                <VideoContainer>{this.getGamingDetails()}</VideoContainer>
              </GamingPage>
            </GamingContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Gaming
