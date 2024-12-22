import styled from 'styled-components'

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
`
export const VideoContainer = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
`
export const CoverContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  width: 100%;
  height: 40vh;
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const InputSearch = styled.input`
  min-width: 150px;
  max-width: 200px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`
export const Button = styled.button`
  width: 30px;
  border: 0px solid;
  background-color: transparent;
`
export const SearchButton = styled.button`
  width: 50px;
  border: 0px solid;
`
export const WebsiteLogo = styled.img`
  width: 75px;
  heigth: 30px;
`
export const GetItButton = styled.button`
  width: 100px;
  height: 28px;
  font-family: Roboto;
  border: 2px solid black;
  background-color: 'transparent';
`

export const HomePage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top 65px;
  margin-left: 30vh;
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 50px 0;
`

export const NoVideosImage = styled.img`
  width: 80%;
  margin-bottom: 20px;
`

export const NoVideosMessage = styled.p`
  font-size: 18px;
  color: #555;
  text-align: center;
  font-weight: bold;
`
export const RetryButton = styled.button`
  width: 150px;
  background-color: ${props => props.bgColor}
  color: ${props => props.color}
  font-family: Roboto;
  font-weight: Bold;
`
