import {useState} from "react";

export default function Todo(){
    const [todo,setTodo]=useState()

    const handlechange=(event)=>{setTodo(event.target.value)}
    return <div>
        <form>
        <input value={todo} onChange={handlechange} type="text" />
        <button type="submit">Submit</button>
        </form>
    </div>
}