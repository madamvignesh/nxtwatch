import styled from 'styled-components'

export const NotFoundsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  height: 100vh;
  background-color: #f9f9f9; /* Adjust background color as needed */
`

export const NotFoundImage = styled.img`
  width: 300px; /* Adjust the size of the image */
  height: auto;
  margin-bottom: 20px;
`

export const NotFoundHeading = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`

export const NotFoundDescription = styled.p`
  font-size: 16px;
  color: #666;
  max-width: 400px;
  line-height: 1.5;
`
