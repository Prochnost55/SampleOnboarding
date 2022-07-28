import React from "react";
import styled from "styled-components";

const Label = styled.label`
    display: block;
    font-size: ${props => props.theme.fontSize.p1};
    margin: 5px 0;
    color: ${props => props.theme.textSecondary};
`;
const Input = styled.input`
    font-size: ${props => props.theme.fontSize.p1};
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
const StaticText = styled.div`
    padding: 10px 20px 10px; 
    border: solid 1px ${props => props.theme.light};
    border-right: 0;
    line-height: 1.6;
    border-radius: 4px;
    font-size: ${props => props.theme.fontSize.p1};
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    width: 140px;
    background: ${props => props.theme.light};
    color: ${props => props.theme.textSecondary};
`;
const URLInputWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    & ${Input}{
        width: calc(350px - 140px);
        border-top-left-radius: 0;
        border-bottom-left-radius: 0;
    }
`;

const URLInput = (props) => {
    return (
        <InputField>
            <Label> {props.label} </Label>
            <URLInputWrapper>
                <StaticText>{props.staticText}</StaticText>
                <Input
                    type={'text'}
                    name={props.name}
                    id={props.id}
                    className={props.cssClass}
                    placeholder={props.placeholder}
                    onChange={props.onChange}
                    value={props.value}
                />
            </URLInputWrapper>
        </InputField>
    )
}

export default URLInput;
