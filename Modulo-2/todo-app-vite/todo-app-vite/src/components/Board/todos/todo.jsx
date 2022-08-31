import React from 'react'
import { TodoContainer, Button } from "../board.style.js";

const Todo = () => {
    return (
        <TodoContainer>

            <TodoContainer>
                <Button>Completas</Button>
                <Separator />
                <Button>Incompletas</Button>
                <Separator />
                <Button>Eliminadas</Button>
                <Separator />
            </TodoContainer>
        </TodoContainer>
    )
}

export default Todo

const Separator = () => {
    return <div style={{ width: "100%", border: "1px dotted black" }}></div>;
}