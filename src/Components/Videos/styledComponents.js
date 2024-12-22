import styled from 'styled-components'

export const HomeHandler = styled.ul`
  padding: 24px;
  display: flex;
  text-decoration: none;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const VideoCard = styled.li`
  display: flex;
  flex-direction: column;
  width: 30%;
  height: 450px;
  margin-bottom: 30px;
`
export const VideoBanner = styled.img`
  width: 100%;
  height: 250px;
  size: cover;
`
export const VideoInternal = styled.div`
  display: flex;
  padding: 12px;
  flex-direction: row;
`
export const VideoProfile = styled.img`
  width: 60px;
  height: 60px;
  padding-top: 20px;
`
export const VideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding-left: 10px;
`
export const Title = styled.p`
  font-size: 18px;
  margin-bottom: 0px;
`
export const Channelname = styled.p`
  font-size: 16px;
  margin-bottom: 0px;
`

export const VideoDate = styled.p`
  font-size: 12px;
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

export const NoVideosMessage = styled.h1`
  font-size: 18px;
  color: #555;
  text-align: center;
  font-weight: bold;
`
export const LikeContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`
export const SaveButton = styled.button`
  width: 100px;
  height: 25px;
  border-radius: 3px;
  border: 0px solid;
  background-color: #cbd5e1;
  font-family: Roboto;
`
export const LikeButtonHandler = styled.div`
  displaa: flex;
  flex-direction: row;
`
export const LikeButton = styled.button`
  width: 75px;
  height: 20px;
  border: 0px solid;
  margin: 2px;
  background-color: #cbd5e1;
  border-radius: 3px;
  font-family: Roboto;
  color: #2563eb;
`
