import axios from "axios";

const BASE_URL = "http://localhost:8000/api/tasks";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        "Content-Type":"application/json",
    }
})

export async function getTasks(){
    const response = await api.get("/");

    return response.data
}