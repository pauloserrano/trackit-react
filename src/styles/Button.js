import styled from "styled-components";

const Button = ({ children, ...otherProps }) => {
    return (
        <StyledButton {...otherProps}>
            {children}
        </StyledButton>
    )
}

const StyledButton = styled.button`
    background-color: #52B6FF;
    color: #fff;
    border: none;
    border-radius: 5px;
    font-size: 1.2em;
    padding: .5em;
    cursor: pointer;
`

export default Button