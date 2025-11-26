import { useEffect, useState } from "react";
import { getTasks, createTask, updateTask, deleteTask } from "../services/TaskService";
import { FaTrash, FaEdit } from "react-icons/fa";

import ModalRemoveTask from "../components/ModalRemoveTask";

export default function TaskList() {
    const [task, setTask] = useState([]);
    const [title, setTitle] = useState("");
    const [errorTitleTask, setErrorTitleTask] = useState("");
    const [errorUpdateTask, setErrorUpdateTask] = useState("");

    const [taskDelete, setTaskDelete] = useState(null);

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
        setErrorTitleTask("");

        if (title.length < 5) {
            return alert("O noma da tarefa de conter mais 5 caracteres")
        }

        try {
            await createTask({ title });
            setTitle("")
            fetchTasks()
        } catch (err) {
            if (err.response?.data?.message) {
                setErrorTitleTask(err.response?.data?.message);
            } else {
                console.log("Erro ao criar tarefa", err.response?.data)
            }
        }
    }

    async function toggleCompleted(id, title, newStatus) {
        try {
            await updateTask(id, {
                title: title,
                completed: newStatus
            })
            fetchTasks()
        } catch (err) {
            setErrorUpdateTask(erro.response?.data?.message)
            console.log("Erro ao atualiza status da tarefa", err.response?.data)
        }
    }

    async function removeTask() {
        try {
            if (!taskDelete) return;

            await deleteTask(taskDelete)
            setTaskDelete(null)
            fetchTasks();
        } catch (err) {
            setErrorUpdateTask(erro.response?.data?.message)
            console.log("Erro ao deletar tarefa", err.response?.data)
        }
    }

    return (
        <div className="w-full h-screen bg-slate-900 flex flex-col justify-start items-center pt-10 bg-gray-100">

            {errorTitleTask && (
                <p className="text-red-500 font-medium mb-4">{errorTitleTask}</p>
            )}

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

            {errorUpdateTask && (
                <p className="text-red-500 font-medium mb-4">{errorUpdateTask}</p>
            )}

            {task.length > 0 &&

                <ul className="w-full max-w-xl bg-white shadow-md rounded-lg p-4 mt-32">
                    {task.map((task) => (
                        <li
                            key={task.id}
                            className="flex items-center justify-between border-b last:border-none py-3"
                        >
                            <input
                                type="checkbox"
                                className="w-5 h-5 mr-3"
                                checked={task.completed}
                                onChange={() => toggleCompleted(task.id, task.title, !task.completed)}
                            />

                            <span className="flex-1">{task.title}</span>

                            <div className="flex gap-4 text-gray-600">
                                {/* <FaEdit className="cursor-pointer hover:text-blue-600" /> */}
                                <button
                                    onClick={() => setTaskDelete(task.id)}
                                >
                                    <FaTrash className="cursor-pointer hover:text-red-600" />
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            }

            <ModalRemoveTask
                task={taskDelete}
                onConfirm={removeTask}
                onCancel={() => setTaskDelete(null)}
            />
        </div>
    );
}