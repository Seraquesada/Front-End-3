import axios from "axios";
import { useState,useEffect } from "react";
const UrlBase = "http://localhost:3020"

export const requestHandler = () => {
    const [task , setTask] = useState(null);
    const [error, setError] = useState()
    
    useEffect(()=>{    
        const request = async()=> {
        axios.get(UrlBase + '/todos' )
        .then(response => setTask(response.data.data))
        .catch(error => setError(error))
        request()}},[])

    const createNewTask = (newTask) => {
        axios.post(UrlBase + '/todos',newTask)
    }

    return {
        task,
        error,
        createNewTask
    };
}