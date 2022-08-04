import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { SignIn } from '../styles'
import { login } from '../services/api'
import Form from './common/Form'
import Button from './common/Button'

const Login = () => {
  const navigate = useNavigate()

  const handleSubmit = async ({ email, password }) => {
    try{
      const response = await login({email, password})
      navigate('/habitos', { state: response.data })
    
    } catch(err){
      console.log(err)
    }
  }

  return (
    <SignIn>
      <Logo />
      <h1>TrackIt</h1>
      <Form 
        submitHandler={handleSubmit} 
        inputs={[
          { name: 'email', type: 'email', placeholder: 'email' },
          { name: 'password', type: 'password', placeholder: 'senha' }
        ]}>
        <Button type='submit'>Entrar</Button>
      </Form>
      <p onClick={() => navigate('/cadastro')}>Não tem uma conta? Cadastre-se!</p>
    </SignIn>
  )
}


export default Login