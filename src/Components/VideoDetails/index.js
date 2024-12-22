import {Component} from 'react'
import ReactPlayer from 'react-player'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'
import ThemeAndVideoContext from '../../Content/ThemeAndVideoContext'
import Header from '../Header'
import {
  VideoDetailsContainer,
  VideoPlayerContainer,
  Title,
  DetailsContainer,
  ChannelDetails,
  ChannelLogo,
  ChannelInfo,
  ChannelName,
  ViewCount,
  PublishedDate,
  Description,
  SubscriberCount,
} from './styledComponents'

const apiCallStatus = {
  success: 'SUCCESS',
  failure: 'FAILURE',
  initially: 'INITIALLY',
  isProgress: 'ISPROGRESS',
}

class VideoDetails extends Component {
  state = {
    videoDetails: {},
    currentStatus: apiCallStatus.initially,
  }

  componentDidMount() {
    this.fetchVideoDetails()
  }

  fetchVideoDetails = async () => {
    this.setState({currentStatus: apiCallStatus.isProgress})
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/videos/${id}`
    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      console.log(data.video_details)
      const updatedData = {
        id: data.video_details.id,
        title: data.video_details.title,
        videoUrl: data.video_details.video_url,
        viewCount: data.video_details.view_count,
        publishedAt: data.video_details.published_at,
        description: data.video_details.description,
        channel: {
          name: data.video_details.channel.name,
          profileImageUrl: data.video_details.channel.profile_image_url,
          subscriberCount: data.video_details.channel.subscriber_count,
        },
      }
      this.setState({
        videoDetails: updatedData,
        currentStatus: apiCallStatus.success,
      })
    } else {
      this.setState({currentStatus: apiCallStatus.failure})
    }
  }

  ErrorPage = () => (
    <div className="error-container">
      <h1>Error</h1>
      <p>Something went wrong! Please try again.</p>
    </div>
  )

  renderVideoDetails = () => {
    const {videoDetails} = this.state
    const {
      title,
      videoUrl,
      channel,
      viewCount,
      publishedAt,
      description,
    } = videoDetails
    return (
      <>
        <VideoPlayerContainer>
          <ReactPlayer url={videoUrl} />
        </VideoPlayerContainer>
        <Title>{title}</Title>
        <DetailsContainer>
          <ViewCount>{viewCount} views</ViewCount>
          <PublishedDate>{publishedAt}</PublishedDate>
        </DetailsContainer>
        <ChannelDetails>
          <ChannelLogo src={channel.profileImageUrl} alt="channel logo" />
          <ChannelInfo>
            <ChannelName>{channel.name}</ChannelName>
            <SubscriberCount>
              {channel.subscriberCount} subscribers
            </SubscriberCount>
            <Description>{description}</Description>
          </ChannelInfo>
        </ChannelDetails>
      </>
    )
  }

  getVideoDetails = () => {
    const {currentStatus} = this.state
    switch (currentStatus) {
      case apiCallStatus.isProgress:
        return <h1>Loading...</h1>
      case apiCallStatus.failure:
        return this.ErrorPage()
      case apiCallStatus.success:
        return this.renderVideoDetails()
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
            <VideoDetailsContainer bgColor={bgColor} color={color}>
              <Header />
              {this.getVideoDetails()}
            </VideoDetailsContainer>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default withRouter(VideoDetails)
