import {useState} from "react";

export default function Todo(){
    const [todo,setTodo]=useState()
    const [todolist,setTodoList]=useState([])
    const handlechange=(event)=>{setTodo(event.target.value)}

    const handlesubmit=(event)=>{
        event.preventDefault()
        let templist=todolist
        templist.push(todo)
        setTodoList(templist)
        setTodo("")
    }
    return <div>
        <form onSubmit={handlesubmit}>
        <input value={todo} onChange={handlechange} type="text" />
        <button type="submit">Submit</button>

        </form>
        {todolist.map((item)=>(<h3>{item}</h3>))}
    </div>
}