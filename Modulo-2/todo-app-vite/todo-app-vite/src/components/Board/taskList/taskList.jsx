import React from 'react';
import { UL } from "./tasks.style";
import { Input } from '../searchEngine/searchEngine.style';
import { Button } from '../board.style';
import { AiOutlineCheck, AiFillDelete, AiOutlineStar } from "react-icons/ai";
import styles from "./tasks.module.css";

const TasksList = ({tasks, newTask , setNewTask, handlerSubmit}) => {
    return (
        <UL>
            <form onSubmit={handlerSubmit}> 
                <Input
                placeholder="agreagar tarea nueva"
                isBorder={true}
                value={newTask}
                onChange={e => setNewTask(e.target.value)}
                />
                <Button
                    color={"main"}
                    isMargin={true}
                >
                    Agregar
                </Button>
            </form>
            {
            tasks?.map( task => {
                <Task 
                key={task.id}
                task={task.task}
                id={task.id}
                />
            })
            }          
        </UL>
    )
};

const Task = ({ task, id }) => {
    return (
        <li style={taskCompStyle}>
            <p>{task}</p>
            <div style={iconStyle}>
                <AiOutlineStar
                    onClick={() => alert(`La tarea ${id} ha sido hecha Importante`)}
                    size={20}
                    className={styles['singleIcon']}
                />
                <AiOutlineCheck
                    onClick={() => alert(`La tarea ${id} ha sido chuleada.`)}
                    size={20}
                    className={styles['singleIcon']}
                />
                <AiFillDelete
                    onClick={() => alert(`La tarea ${id} ha sido eliminada.`)}
                    size={20}
                    className={styles['singleIcon']}
                />
            </div>
        </li>
    )
};

const taskCompStyle = { display: "flex", textAlign: "center", alignItems: "center", justifyContent: "space-between" };
const iconStyle = { display: "flex", gap: "5px" };

export default TasksList;