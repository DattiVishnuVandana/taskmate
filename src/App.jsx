
import './App.css'
import TaskList from './components/TaskList'
import Header from './components/Header'
import AddTask from './components/AddTask'
import { useState } from 'react'

function App() {

  const [tasks,setTasks]=useState([{id:1234,name:"React-js",completed:true},
        {id:1235,name:"node-js",completed:false},
        {id:1236,name:"Gate",completed:true}
      ])
 const stuff="random"
  return (
    <>
    
    <Header/>
    <main>
    <AddTask tasks={tasks} setTasks={setTasks} />
     <TaskList  tasks={tasks} setTasks={setTasks} info={stuff}/>
     </main>
     
      </>
  )
}

export default App
