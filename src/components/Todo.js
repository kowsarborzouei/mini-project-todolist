import {Button, Card} from "react-bootstrap";
import {useState} from "react";
const Todo=({text, todo, toDos, setToDos})=>{
    const [mood,setMood]=useState('UnComplete')
    //Remove
    const deleteHandler = () => {
        setToDos(toDos.filter((e) => e.id !== todo.id))
    }
    const completeHandler = () => {
        setToDos(toDos.map((item) => {
            if (item.id === todo.id) {
                return {...item,completed:!item.completed}
            }return item;

        }))
        console.log(todo.completed)
        if(todo.completed){
            setMood('UnComplete')
        }else setMood('Complete')

    }
    return(
        <Card className={'card--m'} >
            <Card.Header>{mood}</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                    <p>{text}</p>
                    <footer >
                        <div>
                            <Button onClick={completeHandler }  variant="primary" size="sm">Done</Button>{' '}
                            <Button onClick={deleteHandler} variant="secondary" size="sm">Delete</Button>
                        </div>
                    </footer>
                </blockquote>
            </Card.Body>
        </Card>
    )
}
export default Todo