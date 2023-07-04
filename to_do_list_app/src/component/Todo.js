import {useState} from "react";
import Listitem from "./Listitem";
import styles from "../Style.module.css"

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
    return (<div className={styles.todoform}>
        <form onSubmit={handlesubmit}>
        <input placeholder="Add To Do Items" value={todo} onChange={handlechange} type="text" className={styles.todoinput} />
        <button type="submit" className={styles.todobutton}>Add</button>

        </form>
        {todolist.map((item)=>(<Listitem name={item} key={item}></Listitem>))}

    </div>)
}