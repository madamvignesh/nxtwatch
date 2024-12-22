import styled from 'styled-components'

export const NavConatiner = styled.nav`
  padding: 10px;
  margin-top: 60px;
  background-color: ${props => props.bgColor};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 30vh;
  height: 100%;
  position: fixed;
  top: 50px;
  left: 0;
  height: 80vh;
  width: 200px;
  overflow-y: auto;
  z-index: 10;
`

export const List = styled.ul`
  text-decoration: none;
  list-style: none;
`

export const Card = styled.li`
  display: flex;
  text-decoration: none;
  padding: 10px;
  background-color: ${props => props.bgColor};
  flex-direction: row;
  align-items: center;
  width: 20vh;
  height: 50px;
`

export const Contact = styled.div`
  display: flex;
  flex-direction: column;
  padding: 18px;
`

export const Heading = styled.p`
  font-size: 18px;
`
export const ContactLogo = styled.div`
  display: flex;
  flex-direction: row;
`
export const Logo = styled.img`
  padding: 8px;
  width: 45px;
`
