import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { SignIn as StyledSignIn } from '../styles'
import { login } from '../services/api'
import Form from './common/Form'
import Button from './common/Button'
import { useGlobalContext } from './context/GlobalContext'


const SignIn = () => {
  const [isLoading, setIsLoading] = useState(false)
  let { setUser, setUserUpdate } = useGlobalContext()
  const navigate = useNavigate()

  useEffect(() => {
    if(localStorage.getItem('user')){
      setUser(JSON.parse(localStorage.getItem('user')))
      navigate('/hoje')
    }
  }, [setUser, navigate])


  const handleSubmit = async ({ email, password }) => {
    setIsLoading(true)
    
    try{
      const response = await login({email, password})
      
      if (response.data) {
        delete response.data.password
        await localStorage.setItem('user', JSON.stringify(response.data))
        setUser(response.data)
        setUserUpdate(true)
        navigate('/hoje')
      }
    
    } catch(err){
      alert('email e/ou senha inválidos!')
      setIsLoading(false)
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