import Form from "./component/Form";
import Header from "./component/Header";
import {useState} from "react";

function App() {
    const [todo,setTodo]=useState('')
    const [todolist,setTodoList]=useState([])

    return (
    <div className="App">
        <Header></Header>
     <Form todo={todo}
           settodo={setTodo}
           todolist={todolist}
           settodolist={setTodoList}></Form>
    </div>
  );
}

export default App;
