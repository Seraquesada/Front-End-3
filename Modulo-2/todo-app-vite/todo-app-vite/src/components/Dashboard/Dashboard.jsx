import React,{useState , useEffect} from 'react'
import { Container } from "./dashboard.styles.js";
import Navbar from "../Navbar/Navbar.jsx";
import Board from "../Board/Board.jsx";
import { requestHandler } from '../../hooks/api.js';


const Dashboard = () => {
    const {tasks,error , createNewTask} = requestHandler();
    const [newTask, setNewTask] = useState();

    const handlerSubmit = (e) => {
        e.preventDefault();
        console.log(newTask)
        const newTaskPost = {
            task: newTask,
            isCompleted: false,
            isImportant: false,
            isDelete: false
        }
        createNewTask(newTaskPost)
        setNewTask("");
    }

    const childProps = {
        tasks,
        newTask,
        setNewTask,
        handlerSubmit
    }

    return (
        <Container>
            <Navbar />
            <Board  {...childProps}/>
        </Container>
    )
}

export default Dashboard