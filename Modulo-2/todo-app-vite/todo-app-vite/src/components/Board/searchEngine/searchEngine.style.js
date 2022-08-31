import styled from "styled-components";

export const Input = styled.input`
    border-radius: 5px;
    width: 200px;
    height: 30px;
    border: ${props => !props.isBorder? "1px solid gray" : "none"};
    padding-left: 15px;
    outline: none;

    @media screen and (max-width: 560px){
        width: 90%;
    }
`;