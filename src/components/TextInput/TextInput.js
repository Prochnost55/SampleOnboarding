import React from "react";
import styled from "styled-components";

const Label = styled.label`
    display: block;
    font-size: ${props => props.theme.fontSize.p1};;
    margin: 5px 0;
    color: ${props => props.theme.textSecondary};
`;
const Input = styled.input`
    font-size: 14px;
    padding: 10px 10px 8px;
    display: block;
    border: solid 1px ${props => props.theme.light};
    border-radius: 4px;
    opacity: .9;
    background-color: #fff;
    line-height: 24px;
    width: 350px;
    font-weight: 300;
    color: ${props => props.theme.textSecondary};
`;
const InputField = styled.div`
    margin: 10px 0;
`;
const TextInput = (props) => {
    return (
        <InputField>
            <Label> {props.label} </Label>
            <Input 
                type={'text'} 
                name={props.name} 
                id={props.id} 
                className={props.cssClass} 
                placeholder={props.placeholder}
                onChange={props.onChange}
                value={props.value}
            />
        </InputField>
    )
}

export default TextInput;
