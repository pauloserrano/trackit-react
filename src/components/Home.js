import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Main } from '../styles'

const Home = () => {
  const { state } = useLocation()
  console.log(state)

  return (
    <StyledHome>Home</StyledHome>
  )
}

const StyledHome = styled(Main)`
  //styles
`

export default Home