import {Container, Row, Col, Form, Button} from 'react-bootstrap';
const Forms=({setInputText,inputText,setToDos,toDos,satStatus})=>{
    const inputChangeHandler=(e)=>{
        setInputText(e.target.value)
    }
    const submitToDoHandler=(e)=>{
        e.preventDefault();
       setToDos([...toDos,{text: inputText,completed:false,id:Math.random()*1000}])
        setInputText('')

    }
    const statusHandler=(e)=>{
        satStatus(e.target.value)
        console.log(e.target.value)

    }
    return (
        <Container fluid>
            <Row>
                <Col></Col>
                <Col xs={12} sm={10} md={6} >
                    <Form.Group  className="mb-3">
                        <h1 style={{textAlign:"center"}}>ToDo</h1>
                        <div className={'style--input--btn'}>
                            <Form.Control value={inputText} onChange={inputChangeHandler} type="text" placeholder="remind me to..."/>
                            <Button onClick={submitToDoHandler} type={'submit'} variant="primary">Add</Button>
                        </div>
                        <Form.Select onChange={statusHandler}>
                            <option value={"all"}>All</option>
                            <option value={"completed"}>Complete</option>
                            <option value={"uncompleted"}>UnComplete</option>
                        </Form.Select>
                    </Form.Group>
                </Col>
                <Col></Col>
            </Row>
        </Container>
    )
}
export default Forms