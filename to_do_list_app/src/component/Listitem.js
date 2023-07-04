import Todo from "./Todo";


export default function Listitem({todolist,setTodoList}){
    return<div>  {todolist.map((todoitem)=>(<Todo key={todoitem.id} todoitem={todoitem} todolist={todolist} setTodoList={setTodoList}></Todo>))}
    </div>
}