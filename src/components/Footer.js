import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Footer = () => {
  const navigate = useNavigate()
  const percentage = 66

  return (
    <StyledFooter>
      <button onClick={() => navigate('/habitos')}>Hábitos</button>
      <button onClick={() => navigate('/hoje')}>Hoje
        {/* <CircularProgressbar
          value={percentage}
          text={'Hoje'}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#3e98c7",
            textSize: "24px",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
          })}
        /> */}
      </button>
      <button onClick={() => navigate('/historico')}>Histórico</button>
    </StyledFooter>
  )
}

const StyledFooter = styled.footer`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  position: sticky;
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: #fff;
  z-index: 1;

  button{
    position: relative;
    justify-self: center;
    align-self: center;
    background-color: transparent;
    border: none;
    font-size: 18px;
    color: #52B6FF;
    cursor: pointer;

    &:nth-child(2){
      width: 100px;
      bottom: 1.5em;
    }
  }
`

export default Footer