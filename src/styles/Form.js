import styled from "styled-components";

const Form = ({ children, ...otherProps }) => {
  return (
    <StyledForm { ...otherProps }>
        {children}
    </StyledForm>
  )
}

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    margin: 1em 0;
    width: min(300px, 100%);

    input:not(:last-child), label{
        margin-bottom: .5em;
    }
    
    input{
        border: 1px solid #D4D4D4;
        border-radius: 5px;
        font-size: 1.2em;
        padding: .5em;
        color: #666666;

        ::placeholder{
            color: #DBDBDB;
        }
    }
`

export default Form