import styled from "styled-components";

export const UL = styled.ul`
    list-style: none;
    padding: 10px;
    background-color: white;
    border-radius: 7px;
    display: flex;
    flex-direction: column;
    text-align: start;
    justify-content: center;
    gap: 7px;
    align-content: center;

    & > li {
        border-radius: 10px;
        height: 35px;
        background-color: #eee;
        padding: 10px;
    }
`