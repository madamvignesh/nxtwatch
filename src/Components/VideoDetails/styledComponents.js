import styled from 'styled-components'

export const VideoDetailsContainer = styled.div`
  margin-top: 50px;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  width: 100%;
  min-height: 100vh;
  padding: 24px;
`

export const VideoPlayerContainer = styled.div`
  width: 100%;
  height: 60vh;
  margin-bottom: 16px;
`

export const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin: 16px 0;
`

export const DetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
`

export const ViewCount = styled.p`
  font-size: 14px;
  color: ${props => props.color || '#616161'};
`

export const PublishedDate = styled.p`
  font-size: 14px;
  color: ${props => props.color || '#616161'};
`

export const ChannelDetails = styled.div`
  display: flex;
  margin-top: 16px;
  align-items: flex-start;
`

export const ChannelLogo = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 16px;
`

export const ChannelInfo = styled.div`
  display: flex;
  flex-direction: column;
`

export const ChannelName = styled.p`
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  color: ${props => props.color || '#616161'};
  margin-top: 8px;
`
export const SubscriberCount = styled.span`
  font-size: 16px;
  color: ${props => props.color};
  margin-top: 5px;
  font-weight: bold;
`
