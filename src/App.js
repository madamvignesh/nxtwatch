import {Component} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ProtectedRoute from './Components/ProtectedRoute'
import Trending from './Components/Trending'
import Login from './Components/Login'
import Home from './Components/Home'
import VideoDetails from './Components/VideoDetails'
import Gaming from './Components/Gaming'
import SavedVideos from './Components/SavedVideos'
import NotFound from './Components/NotFound'

import ThemeAndVideoContext from './Content/ThemeAndVideoContext'

import './App.css'

// Replace your code here <ProtectedRoute exact path="/gaming" component={Gaming} />

class App extends Component {
  state = {
    savedVideos: [],
    isDarkTheme: false,
    activeTab: 'Home',
  }

  changeTab = tab => {
    console.log(tab)
    this.setState({activeTab: tab})
  }

  toggleTheme = () => {
    this.setState(prevState => ({
      isDarkTheme: !prevState.isDarkTheme,
    }))
  }

  addVideo = video => {
    const {savedVideos} = this.state
    const index = savedVideos.findIndex(eachVideo => eachVideo.id === video.id)
    if (index === -1) {
      this.setState({savedVideos: [...savedVideos, video]})
    } else {
      savedVideos.splice(index, 1)
      this.setState({savedVideos})
    }
  }

  removeVideo = id => {
    const {savedVideos} = this.state
    const updatedSavedVideos = savedVideos.filter(
      eachVideo => eachVideo.id !== id,
    )
    this.setState({savedVideos: updatedSavedVideos})
  }

  render() {
    const {savedVideos, isDarkTheme, activeTab} = this.state
    // console.log(savedVideos)
    return (
      <ThemeAndVideoContext.Provider
        value={{
          savedVideos,
          isDarkTheme,
          activeTab,
          toggleTheme: this.toggleTheme,
          addVideo: this.addVideo,
          changeTab: this.changeTab,
        }}
      >
        <Switch>
          <Route exact path="/login" component={Login} />
          <ProtectedRoute exact path="/" component={Home} />
          <ProtectedRoute exact path="/trending" component={Trending} />
          <ProtectedRoute exact path="/gaming" component={Gaming} />
          <ProtectedRoute exact path="/videos/:id" component={VideoDetails} />
          <ProtectedRoute exact path="/saved-videos" component={SavedVideos} />
          <Route exact path="/notfound" component={NotFound} />
          <Redirect to="/notfound" />
        </Switch>
      </ThemeAndVideoContext.Provider>
    )
  }
}

export default App
