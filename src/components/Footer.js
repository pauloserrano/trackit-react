import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { useGlobalContext } from './context/GlobalContext';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Footer = () => {
  const navigate = useNavigate()
  let { percentage } = useGlobalContext()

  return (
    <StyledFooter>
      <button onClick={() => navigate('/habitos')}>Hábitos</button>
      <button className='progress-bar' onClick={() => navigate('/hoje')}>
        <CircularProgressbar
          value={percentage}
          text={'Hoje'}
          background
          backgroundPadding={6}
          styles={buildStyles({
            backgroundColor: "#52B6FF",
            textSize: "24px",
            textColor: "#fff",
            pathColor: "#fff",
            trailColor: "transparent"
          })}
        />
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
    justify-self: center;
    background-color: transparent;
    border: none;
    font-size: 18px;
    width: 100%;
    color: #52B6FF;
    cursor: pointer;

    &.progress-bar{
      position: relative;

      svg{
        position: absolute;
        bottom: 1em;
        right: 50%;
        transform: translateX(50%);
        width: 90px;
      }
    }
  }
`

export default Footer