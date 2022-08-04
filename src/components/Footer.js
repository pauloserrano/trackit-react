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
  z-index: 1;
`

export default Footer