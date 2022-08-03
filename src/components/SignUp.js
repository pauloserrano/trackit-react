import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/images/logo.svg'
import { SignIn } from '../styles'
import { createAccount } from '../services/api'
import Form from './common/Form'

const SignUp = () => {
  const navigate = useNavigate()

  const handleSubmit = async ({ email, password, name, image }) => {
    try{
      await createAccount({email, password, name, image})
      navigate('/')
    
    } catch (err) {
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
          { name: 'password', type: 'password', placeholder: 'senha' },
          { name: 'name', placeholder: 'nome' },
          { name: 'image', placeholder: 'foto' }
        ]} 
      />
      <p onClick={() => navigate('/')}>Não tem uma conta? Cadastre-se!</p>
    </SignIn>
  )
}

export default SignUp