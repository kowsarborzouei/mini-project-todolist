import {Card, Col,Container,Row,Button} from "react-bootstrap";

import Todo from "./Todo";

const TodoList=({setToDos,toDos,filteredTodos})=>{
    return(
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={12} sm={10} md={6}>
                    {filteredTodos.map(todo=>(
                     <Todo todo={todo} setToDos={setToDos} toDos={toDos} key={todo.id} text={todo.text} />
                    ))}
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default TodoList