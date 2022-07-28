import React from "react";
import styled from "styled-components";

const Button = styled.button`
    border: none;
    margin: 15px 0;
    background: ${props => props.theme.primary};
    border-radius: 4px;
    padding: 16px;
    font-weight: 300;
    text-align: center;
    min-width: 100px;
    position: relative;
    color: #fff;
    width: 350px;
    font-size: ${props => props.theme.fontSize.h6};
    letter-spacing: 0.5px;
    cursor: pointer
`;

export default Button;
