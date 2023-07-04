import {useState} from "react";
import Form from "./component/Form";
import Header from "./component/Header";
import Listitem from "./component/Listitem";

function App() {
    const [todo, setTodo] = useState('');
    const [todolist, setTodoList] = useState([]);

    return (
        <div className="App">
            <Header></Header>
            <Form
                todo={todo}
                settodo={setTodo}
                todolist={todolist}
                settodolist={setTodoList}
            />
            <Listitem todolist={todolist} setTodoList={setTodoList} />
        </div>
    );
}

export default App;
