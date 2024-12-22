import styled from 'styled-components'

export const GamingContainer = styled.div`
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

export const WebsiteLogo = styled.img`
  width: 75px;
  height: 30px;
`

export const GetItButton = styled.button`
  width: 100px;
  height: 28px;
  font-family: Roboto;
  border: 2px solid black;
  background-color: 'transparent';
`

export const GamingPage = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 65px;
  margin-left: 30vh;
`

export const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px 0;
`

export const TitleText = styled.h1`
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.color};
`
