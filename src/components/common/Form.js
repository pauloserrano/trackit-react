import { useState } from 'react'
import { Form as StyledForm, Button } from '../../styles'

const Form = ({ inputs, submitHandler }) => {
    const [formData, setFormData] = useState({ email: 'calvo@minoxidil.com', password: '1234' })
    const [loading, setLoading] = useState(false)

    const handleFormChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setLoading(true)

        if (!isFormValid()) {
            return
        }

        submitHandler(formData)
        setLoading(false)
    }

    const isFormValid = () => {
        console.warn('Atenção: a validação do form ainda está pendente!')
        return true
    }

  return (
    <StyledForm onSubmit={handleFormSubmit}>
        {inputs.map(({ name, type, placeholder }, id) => (
            <input 
                required
                key={id}
                type={type ? type : 'text'}
                name={name}
                placeholder={placeholder ? placeholder : name}
                value={formData[name]} 
                onChange={handleFormChange} />
            ))
        }
        <Button type='submit'>
            {loading ? 'loading' : 'Entrar'}
        </Button>
    </StyledForm>
  )
}

export default Form