import React from 'react'
import styled from 'styled-components'

const Footer = () => {
  return (
    <StyledFooter>Footer</StyledFooter>
  )
}

const StyledFooter = styled.footer`
  position: sticky;
  width: 100%;
  height: 70px;
  bottom: 0;
  background-color: #fff;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.15);
  z-index: 1;
`

export default Footer