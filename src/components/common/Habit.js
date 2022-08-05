import styled from "styled-components"
import { Form } from '../../styles'
import { ReactComponent as DeleteBtn } from '../../assets/delete.svg'
import { deleteHabit } from "../../services/api"


const weekdays = ['domingo', 'segunda', 'terça', 'quarta', 'quinta', 'sexta', 'sábado']

const Habit = ({id, name, days, setHabits, ...otherProps}) => {
    const handleDelete = async () => {
        try{
            const response = await deleteHabit(id)
            setHabits(arr => arr.filter(habit => habit.id !== id))
            console.log(response)
            
        } catch (err){
            console.log(err)
        }
    }
    
  return (
    <Wrapper>
        <Form {...otherProps}>
            <div>{name}</div>
            <section>
                {weekdays.map((day, index) => (
                    <label 
                        key={index}
                        className={days.includes(index) ? 'selected' : ''}
                        htmlFor={day}>
                            {day[0].toUpperCase()}
                        <input 
                            type="checkbox" 
                            name="days"
                            id={day}
                            value={index}
                        />
                    </label>
                    )
                )}
            </section>
            <DeleteBtn onClick={handleDelete}/>
        </Form>
    </Wrapper>
  )
}


const Wrapper = styled.div`
    width: 100%;

    div{
        font-size: 20px;
        color: #666666;
        margin-bottom: .5em;
    }

  section{
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: fit-content;
    width: 100%;
    
    h3{
      color: #126BA5;
      font-size: 24px;
    }
  }

  form {
    width: 100%;
    padding: 16px;
    margin: .5em 0;
    border-radius: 5px;
    background-color: #fff;
    position: relative;

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
    
    svg{
        position: absolute;
        top: 16px;
        right: 16px;
        cursor: pointer;
    }
  }

`

export default Habit