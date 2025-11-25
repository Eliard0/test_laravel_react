import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TaskList from './views/TaskList'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <TaskList />
      </div>
    </>
  )
}

export default App
