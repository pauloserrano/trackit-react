import { useState } from 'react'
import styled from 'styled-components'
import { Form } from '../styles'
import Button from './common/Button'
import { createHabit } from '../services/api'

// const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const weekdays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']

const NewHabit = ({ setHabits }) => {
    const [isShown, setIsShown] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({ name: '', days: [] })

    const handleFormChange = (e) => {
        // Elements
        const input = e.target
        const label = input.parentElement
        label.classList.toggle('selected')
        
        if (input.type === 'checkbox'){
            const checkboxArray = formData[input.name]
            const filteredArray = checkboxArray.filter(day => day !== Number(input.value))
            const isIncluded = filteredArray.length !== checkboxArray.length

            if (isIncluded){
                // Removes the value from the array
                setFormData(() => ({
                    ...formData,
                    [input.name]: filteredArray
                }))
            
            } else {
                // Adds the value to the array
                setFormData(() => ({
                    ...formData,
                    [input.name]: [...formData[input.name], Number(input.value)]
                }))
            }
        
        } else {
            // Updates controlled inputs
            setFormData(() => ({
                ...formData,
                [input.name]: input.value
            }))
        }

        console.log(formData)
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        setIsLoading(true)

        try{
            const response = await createHabit(formData)
            setHabits(prev => [...prev, response.data])
            resetForm()
            console.log(response)
            
        } catch (err) {
            console.log(err)
        }
        
        setIsLoading(false)
    }

    const resetForm = () => {
        setFormData({name: '', days: []})
    }

  return (
    <Wrapper>
        <section>
            <h3>Meus Habitos</h3>
            <button onClick={() => setIsShown(true)}>+</button>
        </section>
        {isShown && (
            <Form onSubmit={handleFormSubmit} isLoading={isLoading}>
                <input 
                    required
                    type="text" 
                    name='name' 
                    placeholder='nome do hábito'
                    value={formData.name}
                    onChange={handleFormChange}
                />
                <section>
                    {weekdays.map((day, index) => (
                        <label 
                            className={formData['days'].includes(index) && 'selected'}
                            key={index}
                            htmlFor={day}>
                                {day[0].toUpperCase()}
                            <input 
                                type="checkbox" 
                                name="days" 
                                id={day}
                                value={index} 
                                onChange={handleFormChange}
                            />
                        </label>
                    ))}
                </section>
                <div>
                    <Button theme='secondary' onClick={() => setIsShown(false)}>Cancelar</Button>
                    <Button type='submit' isLoading={isLoading}>Salvar</Button>
                </div>
            </Form>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;

    & > section{
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: fit-content;
        width: 100%;
        margin-bottom: 1em;
    
    
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

    section{
        display: flex;
        justify-content: flex-start;
        
        label{
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            width: 1.5em;
            height: 1.5em;
            border: 1px solid #DBDBDB;
            border-radius: 5px;
            font-size: 20px;
            color: #DBDBDB;
            cursor: pointer;
            
            &.selected{
                background-color: #CFCFCF;
                border-color: #CFCFCF;
                color: #fff;
            }

            :not(:last-child){
                margin-right: .25em;
            }
    
            input[type="checkbox"]{
                display: none;
            }
        }
    }

    
    div {
        display: flex;
        align-items: center;
        margin-left: auto;

        button{
            width: 90px;
            margin-left: 1em;
        }
    }
  }
`

export default NewHabit