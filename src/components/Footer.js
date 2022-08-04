import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Footer = () => {
  const navigate = useNavigate()

  return (
    <StyledFooter>
      <button onClick={() => navigate('/habitos')}>Hábitos</button>
      <button onClick={() => navigate('/hoje')}>Hoje</button>
      <button onClick={() => navigate('/historico')}>Histórico</button>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  z-index: 1;

  button{
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #52B6FF;
    cursor: pointer;
  }
`

export default Footer