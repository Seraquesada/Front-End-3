import React from 'react';
import { BoardContainer } from "./board.style";
import Todo from './todos/todo.jsx';
import SearchEngine from './searchEngine/searchEngine.jsx';
import TasksList from './taskList/taskList.jsx';

const Board = (props) => {
    return (
        <BoardContainer>
            <div style={div15}>
                <Todo />
            </div>
            <div style={div85}>
                <SearchEngine />
                <TasksList tasks={props} />
            </div>
        </BoardContainer>
    )
}

const div15 = {
    width: "230px",
    height: "100vh",
    borderRight: "1px solid #C7CBC4",
    padding: "20px",
}

const div85 = {
    width: "85%",
    height: "100vh",
    borderLeft: "1px solid #C7CBC4",
    padding: "0px 20px",
}

export default Board;

