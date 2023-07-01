import { styled } from "styled-components";
import { SearchIcon } from "./icons/search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input `
    width: 352px;
    border: none;
    outline: 0;
    border-radius: 8px;
    padding: 10px 16px;
    color: var(--text-dark);
    font-family: inherit;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
    background-color: var(--bg-secondary);
`

const InputContainer = styled.div `
    position: relative;
    width: 352px;

    svg {
        position: absolute;
        right: 20px;
        top: 50%;
        transform: translateY(-50%);
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    value: string,
    handleChange: (value: string) => void
}

export function PrimaryInputWSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput onChange={(event) => props.handleChange(event.target.value)} {...props}/>
            <SearchIcon/>
        </InputContainer>
    )
}