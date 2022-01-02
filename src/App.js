import './App.css';
import Forms from "./components/Forms";
import TodoList from "./components/TodoList";
import {useState, useEffect} from "react";

function App() {
    const [inputText, setInputText] = useState('')
    const [toDos, setToDos] = useState([])
    const [status, setStatus] = useState('all')
    const [filteredTodos, setFilteredTodos] = useState([])
    //Run once when the app start
    useEffect(() => {
        getLocalTodos()
    }, [])
    //useEffect
    useEffect(() => {
        filterHandler()
        saveLocalTodo()
    }, [status, toDos])
    //save to local
    const saveLocalTodo = () => {

        localStorage.setItem("toDos", JSON.stringify(toDos));

    }
    const getLocalTodos = () => {
        if (localStorage.getItem('toDos') === null) {
            localStorage.setItem('toDos', JSON.stringify([]))
        } else {
            let todoLocal = JSON.parse(localStorage.getItem('toDos'))
            setToDos(todoLocal)
        }
    }
    //function
    const filterHandler = () => {
        switch (status) {
            case 'completed':
                setFilteredTodos(toDos.filter(todo => todo.completed === true))
                break;
            case 'uncompleted':
                setFilteredTodos(toDos.filter(todo => todo.completed === false))
                break;
            default:
                setFilteredTodos(toDos)
                break;
        }
    }
    return (
        <div className="App">
            <Forms inputText={inputText} toDos={toDos} setToDos={setToDos} setInputText={setInputText}
                   satStatus={setStatus}/>
            <TodoList filteredTodos={filteredTodos} setToDos={setToDos} toDos={toDos}/>

        </div>
    );
}

export default App;
