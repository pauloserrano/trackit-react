import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { SignIn as StyledSignIn } from '../styles'
import { login } from '../services/api'
import Form from './common/Form'
import Button from './common/Button'
import { useGlobalContext } from './context/GlobalContext'


const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { setUser } = useGlobalContext()
  const navigate = useNavigate()

  const handleSubmit = async ({ email, password }) => {
    setIsLoading(true)

    try{
      const response = await login({email, password})
      setUser(response.data)
      
      if (response.data.token) {
        localStorage.setItem('token', response.data.token)
      }

      navigate('/hoje')
    
    } catch(err){
      alert('email e/ou senha inválidos!')
      setIsLoading(false)
      console.log(err)
    }
  }

  return (
    <StyledSignIn isLoading={isLoading}>
      <Logo />
      <h1>TrackIt</h1>
      <Form 
        submitHandler={handleSubmit} 
        inputs={[
          { name: 'email', type: 'email', placeholder: 'email' },
          { name: 'password', type: 'password', placeholder: 'senha' }
        ]}>
        <Button type='submit' isLoading={isLoading}>Entrar</Button>
      </Form>
      <p onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</p>
    </StyledSignIn>
  )
}


export default SignIn