import styles from "../Style.module.css"

const Todo=({todoitem,todolist,setTodoList})=>{

   const deletetodo=()=>{
       setTodoList(todolist.filter((item)=>item.id!==todoitem.id))
   }

    return(<div >
            <div className={styles.todoitem}>
                <h3 className={styles.todoname}>{todoitem.name}</h3>
                <button onClick={deletetodo} className={styles.deletebutton}>DONE</button>
            </div>
        </div>
    )
}
export default Todo