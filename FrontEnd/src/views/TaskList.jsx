import { useEffect, useState } from "react";
import { getTasks, createTask } from "../services/TaskService";
import { FaTrash, FaEdit } from "react-icons/fa";

export default function TaskList() {
    const [task, setTask] = useState([]);
    const [title, setTitle] = useState("");
    const [error, setError] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    async function fetchTasks() {
        try {
            const data = await getTasks();
            setTask(data.data || data)
        } catch (err) {
            console.log("Error ao buscar dados", err)
        }
    }

    async function registerNewTask() {
        setError("");

        if (title.length < 5) {
            return alert("O noma da tarefa de conter mais 5 caracteres")
        }

        try {
            await createTask({ title });
            setTitle("")
            fetchTasks()
        } catch (err) {
            if (err.response?.data?.message) {
                setError(err.response?.data?.message);
            } else {
                console.log("Erro ao criar tarefa", err.response?.data)
            }
        }
    }

    return (
        <div className="w-full h-screen bg-slate-900 flex flex-col justify-start items-center pt-10 bg-gray-100">

            <div className="flex gap-2 mb-4 w-full max-w-xl">
                <input
                    type="text"
                    placeholder="Adicionar nova tarefa..."
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-white placeholder-gray-400"
                />
                <button
                    onClick={registerNewTask}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg"
                >
                    Adicionar
                </button>
            </div>

            {error && (
                <p className="text-red-500 font-medium mb-4">{error}</p>
            )}

            <ul className="w-full max-w-xl bg-white shadow-md rounded-lg p-4">
                {task.map((task) => (
                    <li
                        key={task.id}
                        className="flex items-center justify-between border-b last:border-none py-3"
                    >
                        <input type="checkbox" className="w-5 h-5 mr-3" />

                        <span className="flex-1">{task.title}</span>

                        <div className="flex gap-4 text-gray-600">
                            <FaEdit className="cursor-pointer hover:text-blue-600" />
                            <FaTrash className="cursor-pointer hover:text-red-600" />
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}