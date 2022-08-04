import React from 'react'
import styled from 'styled-components'
import mockURL from '../assets/catanacomics.jpg'

const Header = () => {
  return (
    <StyledHeader>
      <h1>TrackIt</h1>
      <img src={mockURL} alt="profile" />
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 70px;
  padding: 10px 16px;
  background-color: #126BA5;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;

  h1{
    font-family: 'Playball', cursive;
    font-size: 40px;
    color: #fff;
  }

  img{
    height: 100%;
    border-radius: 50%;
  }
`

export default Header