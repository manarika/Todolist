import styles from '../Style.module.css';
import shortid from 'shortid';

export default function Form({ todo, settodolist, todolist, settodo }) {
    const handlechange = (event) => {
        settodo(event.target.value);
    };

    const handlesubmit = (event) => {
        event.preventDefault();
        settodolist([...todolist, { name: todo, id: shortid.generate() }]);
        settodo("")
    };

    useEffect(() => {
        console.log(todolist);
    }, [todolist]);

    return (
        <div className={styles.todoform}>
            <form onSubmit={handlesubmit}>
                <input
                    placeholder="Add To Do Items"
                    value={todo}
                    onChange={handlechange}
                    type="text"
                    className={styles.todoinput}
                />
                <button type="submit" className={styles.todobutton}>
                    Add
                </button>
            </form>

        </div>
    );
}
