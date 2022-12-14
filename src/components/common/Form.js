import { useState } from 'react'
import { Form as StyledForm } from '../../styles'

const Form = ({ inputs, submitHandler, children }) => {
    const [formData, setFormData] = useState({ email: '', password: '' })

    const handleFormChange = (e) => {
        setFormData(() => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        
        if (!isFormValid()) {
            return
        }

        submitHandler(formData)
    }

    const isFormValid = () => {
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
        {children}
    </StyledForm>
  )
}

export default Form