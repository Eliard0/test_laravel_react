import { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/TaskService";

export default function TaskList(){
    const [task, setTask] = useState([]);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    useEffect(()=>{
        fetchTasks();
    },[]);

    async function fetchTasks() {
        try{ 
            const data = await getTasks();
            setTask(data.data || data)
        } catch(err) {
            console.log("Error ao buscar dados", err)
        }
    }

    async function registerNewTask(){
        setError("");

        if(title.length < 5) {
            return alert("O noma da tarefa de conter mais 5 caracteres")
        }

        try {
            await createTask({ title });
            setTitle("")
            fetchTasks()
        } catch(err) {
            if(err.response?.data?.message){
                setError(err.response?.data?.message);
            }else {
                console.log("Erro ao criar tarefa", err.response?.data)
            }
        }
    }

    return (
        <div>
            <h1>Ola mundo vamos trabalhar</h1>

            <input type="text" placeholder="Adicionar nova tarefa" value={title} onChange={e => setTitle(e.target.value)}/>
            <button onClick={registerNewTask}>Adiciona nova tarefa</button>
            { error && <p style={{color: "red", marginTop: 5}}> {error} </p> }

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