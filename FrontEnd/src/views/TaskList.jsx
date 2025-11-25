import { useEffect, useState } from "react";
import { getTasks } from "../services/TaskService";

export default function TaskList(){
    const [task, setTask] = useState([]);
    const [title, setTitle] = useState("");

    useEffect(()=>{
        fetchTasks();
    },[]);

    async function fetchTasks() {
        try{
            const data = await getTasks();
            setTask(data.data || data)
        }catch(err){
            console.log("Error ao buscar dados", err)
        }
    }

    return (
        <div>
            <h1>Ola mundo vamos trabalhar</h1>

            <ul>
                {task.map(task => (
                    <li key={task.id}>
                        {task.title}
                    </li>
                ))}
            </ul>
        </div>
    );
}