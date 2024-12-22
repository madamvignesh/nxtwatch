import {
  NotFoundsContainer,
  NotFoundImage,
  NotFoundHeading,
  NotFoundDescription,
} from './styledComponents'

const NotFound = () => (
  <NotFoundsContainer>
    <NotFoundImage
      src="https://assets.ccbp.in/frontend/react-js/jobby-app-not-found-img.png"
      alt="not found"
    />
    <NotFoundHeading>Page Not Found</NotFoundHeading>
    <NotFoundDescription>
      We are sorry, the page you requested could not be found
    </NotFoundDescription>
  </NotFoundsContainer>
)

export default NotFound
