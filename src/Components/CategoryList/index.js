import {Link} from 'react-router-dom'
import {IoMdHome} from 'react-icons/io'
import {FaFire} from 'react-icons/fa'
import {RiMenuAddFill} from 'react-icons/ri'
import {SiYoutubegaming} from 'react-icons/si'

import ThemeAndVideoContext from '../../Content/ThemeAndVideoContext'
import {
  Heading,
  List,
  Card,
  NavConatiner,
  ContactLogo,
  Contact,
  Logo,
} from './styledComponents'

const CategoryList = () => (
  <ThemeAndVideoContext.Consumer>
    {value => {
      const {isDarkTheme, activeTab, changeTab} = value
      const bgColor = isDarkTheme ? '#0f0f0f' : '#ffffff'
      const onChangeTab = tab => () => {
        changeTab(tab)
      }
      return (
        <NavConatiner bgColor={bgColor}>
          <p>Enjoy! Now to see your channels and recommendations!</p>
          <List>
            <Link to="/">
              <Card
                bgColor={activeTab === 'Home' ? '#e2e8f0' : bgColor}
                onClick={onChangeTab('Home')}
              >
                <IoMdHome size={25} />
                Home
              </Card>
            </Link>
            <Link to="/trending">
              <Card
                bgColor={activeTab === 'Trending' ? '#e2e8f0' : bgColor}
                onClick={onChangeTab('Trending')}
              >
                <FaFire size={25} />
                Trending
              </Card>
            </Link>
            <Link to="/gaming">
              <Card
                bgColor={activeTab === 'Gaming' ? '#e2e8f0' : bgColor}
                onClick={onChangeTab('gaming')}
              >
                <SiYoutubegaming size={25} />
                Gaming
              </Card>
            </Link>
            <Link to="/saved-videos">
              <Card
                bgColor={activeTab === 'Saved_Videos' ? '#e2e8f0' : bgColor}
                onClick={onChangeTab('Saved_Videos')}
              >
                <RiMenuAddFill size={25} />
                Saved Videos
              </Card>
            </Link>
          </List>
          <Contact>
            <Heading>CONTACT US</Heading>
            <ContactLogo>
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                alt="twitter logo"
              />
              <Logo
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                alt="linked in logo"
              />
            </ContactLogo>
          </Contact>
        </NavConatiner>
      )
    }}
  </ThemeAndVideoContext.Consumer>
)

export default CategoryList
