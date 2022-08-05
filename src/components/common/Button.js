import styled from "styled-components";
import { ThreeDots } from "react-loader-spinner";

const Button = ({ children, theme='primary', isLoading=false, ...otherProps }) => {
    return (
        <StyledButton theme={theme} isLoading={isLoading} {...otherProps} >
            {isLoading ? <ThreeDots color={'#fff'} height={23} width={40} /> : children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    padding: .5em;
    cursor: pointer;
    ${props => {
        if (props.theme === 'primary'){
            return `
                background-color: #52B6FF;
                color: #fff;
            `
        } else if (props.theme === 'secondary'){
            return `
                background-color: #fff;
                color: #52B6FF;
            `
        }
    }}
    opacity: ${props => props.isLoading ? '0.7' : '1'};

    div{
        justify-content: center;
    }
`

export default Button