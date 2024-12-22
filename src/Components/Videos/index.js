import {Component} from 'react'
import {Link} from 'react-router-dom'
// import {AiFillLike, AiFillDislike} from 'react-icons/ai'
import {
  HomeHandler,
  VideoBanner,
  VideoCard,
  VideoInternal,
  Channelname,
  VideoProfile,
  Title,
  VideoDetails,
  VideoDate,
  NoVideosContainer,
  NoVideosImage,
  NoVideosMessage,
  LikeContainer,
  LikeButtonHandler,
  SaveButton,
  LikeButton,
} from './styledComponents'
import ThemeAndVideoContext from '../../Content/ThemeAndVideoContext'

class Videos extends Component {
  state = {
    activeButton: null, // 'like' or 'dislike'
  }

  handleLikeClick = () => {
    this.setState(prevState => ({
      activeButton: prevState.activeButton === 'like' ? null : 'like',
    }))
  }

  handleDislikeClick = () => {
    this.setState(prevState => ({
      activeButton: prevState.activeButton === 'dislike' ? null : 'dislike',
    }))
  }

  render() {
    const {videos} = this.props
    const {activeButton} = this.state

    return (
      <ThemeAndVideoContext.Consumer>
        {value => {
          const {isDarkTheme, addVideo, activeTab, removeVideo} = value
          const bgColor = isDarkTheme ? '#f1f1f1' : '#ffffff'

          const addVideoDetails = video => {
            addVideo(video)
          }

          const onRemove = id => {
            removeVideo(id)
          }

          return (
            <HomeHandler color={bgColor}>
              {videos.length === 0 ? (
                <NoVideosContainer>
                  <NoVideosImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
                    alt="no videos found"
                  />
                  <NoVideosMessage>No Search results found</NoVideosMessage>
                </NoVideosContainer>
              ) : (
                videos.map(eachVideo => (
                  <VideoCard key={eachVideo.id}>
                    <Link to={`/videos/${eachVideo.id}`}>
                      <VideoBanner
                        src={eachVideo.thumbnailUrl}
                        alt="video thumbnail"
                      />
                      <VideoInternal>
                        <VideoProfile
                          src={eachVideo.profileImageUrl}
                          alt="channel logo"
                        />
                        <VideoDetails>
                          <Title>{eachVideo.title}</Title>
                          <Channelname>{eachVideo.name}</Channelname>
                          <VideoDate>{eachVideo.viewCount}</VideoDate>
                        </VideoDetails>
                      </VideoInternal>
                    </Link>
                    <LikeContainer>
                      {activeTab !== 'Saved_Videos' ? (
                        <SaveButton
                          type="button"
                          onClick={() => addVideoDetails(eachVideo)}
                        >
                          Save
                        </SaveButton>
                      ) : (
                        <SaveButton
                          type="button"
                          onClick={() => onRemove(eachVideo.id)}
                        >
                          Remove Video
                        </SaveButton>
                      )}
                      <LikeButtonHandler>
                        <LikeButton
                          style={{
                            color:
                              activeButton === 'like' ? '#2563eb' : '#64748b',
                          }}
                          onClick={this.handleLikeClick}
                        >
                          Like
                        </LikeButton>
                        <LikeButton
                          style={{
                            color:
                              activeButton === 'dislike'
                                ? '#2563eb'
                                : '#64748b',
                          }}
                          onClick={this.handleDislikeClick}
                        >
                          Dislike
                        </LikeButton>
                      </LikeButtonHandler>
                    </LikeContainer>
                  </VideoCard>
                ))
              )}
            </HomeHandler>
          )
        }}
      </ThemeAndVideoContext.Consumer>
    )
  }
}

export default Videos
