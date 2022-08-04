import { useState } from "react";
import styled from "styled-components";

const Button = ({ children, scheme='primary', ...otherProps }) => {
    const [loading, setLoading] = useState(false)

    return (
        <StyledButton scheme={scheme} onClick={() => setLoading(true)} {...otherProps}>
            {loading ? 'loading' : children}
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
        if (props.scheme === 'primary'){
            return `
                background-color: #52B6FF;
                color: #fff;
            `
        } else if (props.scheme === 'secondary'){
            return `
                background-color: #fff;
                color: #52B6FF;
            `
        }
    }}
`

export default Button