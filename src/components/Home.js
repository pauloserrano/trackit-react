import styled from 'styled-components'
import { useLocation } from 'react-router-dom'
import { Main } from '../styles'
import Form from './common/Form'
import Button from './common/Button'

const Home = () => {
  const { state } = useLocation()
  console.log(state)

  return (
    <StyledHome>
      <section>
        <h3>Meus Habitos</h3>
        <button>+</button>
      </section>
      <Form 
        inputs={[
          {name: 'name', placeholder: 'nome do hábito'}
        ]}>
          <Wrapper>
            <Button scheme='secondary'>Cancelar</Button>
            <Button type='submit'>Salvar</Button>
          </Wrapper>
      </Form>
    </StyledHome>
  )
}

const StyledHome = styled(Main)`
  section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    width: 100%;
    
    h3{
      color: #126BA5;
    }

    button{
      display: flex;
      justify-content: center;
      align-items: center;
      height: 1.5em;
      width: 1.5em;
      border: none;
      border-radius: 5px;
      font-family: monospace;
      background-color: #52B6FF;
      color: #fff;
      cursor: pointer;
    }

    h3, button{
      font-size: 24px;
    }
  }

  form {
    width: 100%;
    padding: 16px;
    border-radius: 5px;
    background-color: #fff;
  }
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;

  button{
    width: 90px;
    margin-left: 1em;
  }
`

export default Home