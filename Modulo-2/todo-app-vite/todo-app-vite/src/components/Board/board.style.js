import styled from "styled-components";

export const BoardContainer = styled.div`
    width: 100%;
    display: flex;
    margin-top: 20px;
    background-color: #eee;
    border: none;
    border-radius: 10px;
`;

export const TodoContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

export const Button = styled.button`
    background-color: ${props => props.color === "main" ? "#7367f0" : "none"};
    width: 200px;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    color: #eee;
    font-weight: bolder;
    font-size: 17px;
    margin-bottom: ${props => props.isMargin ? "25px" : null};
    cursor: pointer;
    text-transform: capitalize;
    color: ${props => props.color === "main" ? "white" : "black"};
    &:hover{
        transform: scale(1.05);
        -webkit-box-shadow: 4px 6px 13px 0px ${props => props.color === "main" ? "#7367f0" : "none"}; 
        box-shadow: 4px 6px 13px 0px ${props => props.color === "main" ? "#7367f0" : "none"};
    }
`;