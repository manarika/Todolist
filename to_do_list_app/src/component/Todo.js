import {useState} from "react";
import Listitem from "./Listitem";

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
        <button type="submit">Add</button>

        </form>
        {todolist.map((item)=>(<Listitem name={item} key={item}></Listitem>))}

    </div>
}