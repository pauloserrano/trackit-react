import styled from 'styled-components'
import Button from './common/Button'
import { Form } from '../styles'
import { useState } from 'react'

// const weekdays = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
const weekdays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']

const NewHabit = () => {
    const [isShown, setIsShown] = useState(!false)
    const [formData, setFormData] = useState({ name: '', days: [] })

    const handleFormChange = (e) => {
        let updatedForm
        const input = e.target
        const label = input.parentElement
        label.classList.toggle('selected')

        if (input.type === 'checkbox'){
            const checkboxArray = formData[input.name]
            const filteredArray = checkboxArray.filter(day => day !== input.value)
            const isIncluded = filteredArray.length !== checkboxArray.length

            if (isIncluded){
                // Removes the value from the array
                updatedForm = {
                    ...formData,
                    [input.name]: filteredArray
                }
            
            } else {
                // Adds the value to the array
                updatedForm = {
                    ...formData,
                    [input.name]: [...formData[input.name], input.value]
                }
            }
        
        } else {
            updatedForm = {
                ...formData,
                [input.name]: input.value
            }
        }

        setFormData(updatedForm)
        console.log(updatedForm)
    }

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.warn('Envio de formulário em construção')
        resetForm()
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
            <Form onSubmit={handleFormSubmit}>
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
                    <Button scheme='secondary' onClick={() => setIsShown(false)}>Cancelar</Button>
                    <Button type='submit'>Salvar</Button>
                </div>
            </Form>
        )}
    </Wrapper>
  )
}

const Wrapper = styled.div`
    width: 100%;

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