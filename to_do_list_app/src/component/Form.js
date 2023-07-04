import {useState} from "react";
import Listitem from "./Listitem";
import styles from "../Style.module.css"

export default function Form({todo,settodolist,todolist,settodo}){
    const handlechange=(event)=>{settodo(event.target.value)}

    const handlesubmit=(event)=>{
        event.preventDefault()
        settodolist([...todolist,todo])
    }
    return (<div className={styles.todoform}>
        <form onSubmit={handlesubmit}>
        <input placeholder="Add To Do Items" value={todo} onChange={handlechange} type="text" className={styles.todoinput} />
        <button type="submit" className={styles.todobutton}>Add</button>

        </form>
        {todolist.map((item)=>(<Listitem name={item} key={item}></Listitem>))}

    </div>)
}