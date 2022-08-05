import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { Button, SignIn } from '../styles'
import { createAccount } from '../services/api'
import Form from './common/Form'


const SignUp = () => {
  const [isLoading, setIsLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async ({ email, password, name, image }) => {
    setIsLoading(true)
    try{
      await createAccount({ email, password, name, image })
      navigate('/')
    
    } catch (err) {
      setIsLoading(false)
      console.log(err)
    }
  }

  return (
    <SignIn isLoading={isLoading}>
      <Logo />
      <h1>TrackIt</h1>
      <Form
        submitHandler={handleSubmit}
        inputs={[
          { name: 'email', type: 'email', placeholder: 'email' },
          { name: 'password', type: 'password', placeholder: 'senha' },
          { name: 'name', placeholder: 'nome' },
          { name: 'image', placeholder: 'foto' }
        ]}> 
        <Button type='submit' isLoading={isLoading}>Cadastrar</Button>
      </Form>
      <p onClick={() => navigate('/')}>Já tem uma conta? Faça login!</p>
    </SignIn>
  )
}

export default SignUp