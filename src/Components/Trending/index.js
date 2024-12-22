import {Component} from 'react'

import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../Content/ThemeAndVideoContext'
import CategoryList from '../CategoryList'
import Videos from '../Videos'
import Header from '../Header'
import {
  TrendingContainer,
  VideoContainer,
  CoverContainer,
  TrendingPage,
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

class Trending extends Component {
  state = {
    videos: [],
    currentStatus: apiCallStatus.initially,
  }

  componentDidMount() {
    this.fetchTrendingDetails()
  }

  fetchTrendingDetails = async () => {
    this.setState({currentStatus: apiCallStatus.isProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/trending`
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
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({videos: updatedData, currentStatus: apiCallStatus.success})
    } else {
      this.setState({currentStatus: apiCallStatus.failure})
    }
  }

  displayTrending = () => {
    const {videos} = this.state
    return <Videos videos={videos} />
  }

  ErrorPage = () => (
    <div className="error-container">
      <h1>Error</h1>
      <p>Something went wrong! Please try again.</p>
    </div>
  )

  getTrendingDetails = () => {
    const {currentStatus} = this.state
    switch (currentStatus) {
      case apiCallStatus.isProgress:
        return <h1>Loading...</h1>
      case apiCallStatus.failure:
        return this.ErrorPage()
      case apiCallStatus.success:
        return this.displayTrending()
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
            <TrendingContainer bgColor={bgColor} color={color}>
              <Header />
              <CategoryList />
              <TrendingPage>
                <CoverContainer>
                  <WebsiteLogo
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                  <p>Buy Nxt Watch Premium Prepaid plans with UPI </p>
                  <GetItButton>GET IT NOW</GetItButton>
                </CoverContainer>
                <TitleContainer>
                  <TitleText>Trending Videos</TitleText>
                </TitleContainer>
                <VideoContainer>{this.getTrendingDetails()}</VideoContainer>
              </TrendingPage>
            </TrendingContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Trending
