import styled from 'styled-components'

const SignIn = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: fixed;
  top: 0;
  width: 100%;
  min-height: 100vh;
  background-color: #fff;
  z-index: 2;
  ${props => {
    if (props.isLoading){
      return `
        pointer-events: none;
        
        input {
          background-color: #F2F2F2;
        }
      `
    }
  }};

  h1{
    font-size: 4.5em;
    color: #126BA5;
    font-family: 'Playball', cursive;
  }

  p{
    font-size: 14px;
    color: #52B6FF;
    text-decoration: underline;
    cursor: pointer;
  }
`

export default SignIn