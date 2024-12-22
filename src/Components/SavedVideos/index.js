import {CgPlayListAdd} from 'react-icons/cg'

import Header from '../Header'
import CategoryList from '../CategoryList'
import ThemeAndVideoContext from '../../Content/ThemeAndVideoContext'
import Videos from '../Videos'

import {
  SavedContainer,
  SavedTitleIconContainer,
  SavedVideoTitle,
  SavedText,
  NoSavedVideosView,
  NoSavedVideosImage,
  NoSavedVideosHeading,
  NoSavedVideosNote,
} from './styledComponents'

const SavedVideos = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, savedVideos} = value
      // console.log(savedVideos)

      const bgColor = isDarkTheme ? '#0f0f0f' : '#f9f9f9'
      const textColor = isDarkTheme ? '#f9f9f9' : '#231f20'
      const headingColor = isDarkTheme ? '#f1f5f9' : '#1e293b'
      const noteColor = isDarkTheme ? '#e2e8f0' : '#475569'

      return (
        <>
          <Header />
          <CategoryList />
          <SavedContainer data-testid="savedVideos" bgColor={bgColor}>
            <SavedVideoTitle>
              <SavedTitleIconContainer>
                <CgPlayListAdd size={35} color="#ff0000" />
              </SavedTitleIconContainer>
              <SavedText color={textColor}>Saved Videos</SavedText>
            </SavedVideoTitle>
            {savedVideos.length > 0 ? (
              <>
                <Videos videos={savedVideos} />
              </>
            ) : (
              <NoSavedVideosView>
                <NoSavedVideosImage
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
                  alt="no saved videos"
                />
                <NoSavedVideosHeading headingColor={headingColor}>
                  No saved videos found
                </NoSavedVideosHeading>
                <NoSavedVideosNote noteColor={noteColor}>
                  You can save your videos while watching them
                </NoSavedVideosNote>
              </NoSavedVideosView>
            )}
          </SavedContainer>
        </>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default SavedVideos
