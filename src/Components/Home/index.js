import {Component} from 'react'
// import { BarLoader } from 'react-spinners'
import {IoIosSearch, IoMdClose} from 'react-icons/io'
import Cookies from 'js-cookie'
import ThemeAndVideoContext from '../../Content/ThemeAndVideoContext'
import CategoryList from '../CategoryList'

import Videos from '../Videos'
import Header from '../Header'
import {
  MainContainer,
  VideoContainer,
  CoverContainer,
  InputSearch,
  GetItButton,
  WebsiteLogo,
  HomePage,
  InputContainer,
  SearchButton,
  Button,
  NoVideosContainer,
  NoVideosImage,
  NoVideosMessage,
  RetryButton,
} from './styledComponents'

const apiCallStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initailly: 'INITAILLY',
  isProgress: 'ISPROGRESS',
}

class Home extends Component {
  state = {
    video: {},
    currentStatus: apiCallStatus.initailly,
    inputSearch: '',
    closeButton: false,
  }

  componentDidMount() {
    this.fetchHomeDetails()
  }

  fetchHomeDetails = async () => {
    this.setState({currentStatus: apiCallStatus.isProgress})
    const {inputSearch} = this.state
    console.log('started')
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/all?search=${inputSearch}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data)
      const updatedData = data.videos.map(eachVideo => ({
        id: eachVideo.id,
        title: eachVideo.title,
        thumbnailUrl: eachVideo.thumbnail_url,
        viewCount: eachVideo.view_count,
        publishedAt: eachVideo.published_at,
        name: eachVideo.channel.name,
        profileImageUrl: eachVideo.channel.profile_image_url,
      }))
      this.setState({video: updatedData, currentStatus: apiCallStatus.success})
    } else {
      console.log('error')
      this.setState({currentStatus: apiCallStatus.failure})
    }
  }

  displayHome = () => {
    const {video} = this.state
    if (video.length > 0) {
      return <Videos videos={video} />
    }
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          return (
            <NoVideosContainer>
              <NoVideosImage
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                alt="no videos found"
              />
              <NoVideosMessage>No Search results found</NoVideosMessage>
              <NoVideosMessage>
                Try different key words or remove search filter
              </NoVideosMessage>
              <RetryButton
                bgColor={isDarkTheme ? '#424242' : '#ebebeb'}
                color={isDarkTheme ? '#cccccc' : '#616e7c'}
              >
                Retry
              </RetryButton>
            </NoVideosContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }

  Loader = () => (
    <div data-testid="loader">
      <h1>Loading</h1>
    </div>
  )

  ErrorPage = () => (
    <div className="error-container">
      <h1>Error</h1>
      <p>Something went wrong! Please try again.</p>
    </div>
  )

  onChangeSearch = event => {
    this.setState({inputSearch: event.target.value})
  }

  getHomeDetails = () => {
    const {currentStatus} = this.state
    console.log(currentStatus)
    switch (currentStatus) {
      case apiCallStatus.isProgress:
        return this.Loader()
      case apiCallStatus.failure:
        return this.ErrorPage()
      case apiCallStatus.success:
        return this.displayHome()
      default:
        return null
    }
  }

  onCloseBtn = () => {
    this.setState({closeButton: true})
  }

  render() {
    const {inputSearch, closeButton} = this.state
    console.log(inputSearch)
    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme} = value
          const bgColor = isDarkTheme ? '#000000' : '#ffffff'
          const color = isDarkTheme ? '#f9f9f9' : '212121'
          return (
            <MainContainer bgColor={bgColor} color={color}>
              <Header />
              <CategoryList />
              <HomePage>
                {closeButton ? null : (
                  <CoverContainer data-testid="banner">
                    <Button data-testid="close" onClick={this.onCloseBtn}>
                      <IoMdClose size={25} color="#000000" />
                    </Button>
                    <WebsiteLogo
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                      alt="nxt watch logo"
                    />
                    <p>Buy Nxt Watch Premium Prepaid plans with UPI </p>
                    <GetItButton>GET IT NOW</GetItButton>
                  </CoverContainer>
                )}
                <VideoContainer>
                  <InputContainer>
                    <InputSearch
                      type="search"
                      value={inputSearch}
                      placeholder="Search"
                      onChange={this.onChangeSearch}
                    />
                    <SearchButton
                      onClick={this.fetchHomeDetails}
                      data-testid="searchButton"
                    >
                      <IoIosSearch size={25} />
                    </SearchButton>
                  </InputContainer>
                  {this.getHomeDetails()}
                </VideoContainer>
              </HomePage>
            </MainContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Home
