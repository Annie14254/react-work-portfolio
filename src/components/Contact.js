import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './component-styles.css';

function Contact(props){
    return(
        <div>
            <h1 class = "sectionTitle">Contact</h1>

            <form className='row mx-3 mt-3'>
                <div className="col-2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type = "text" name = "name"/><br/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type = "email" name = "email"/><br/>
                    <Form.Label>Question</Form.Label>
                    <Form.Control as = "textarea" name = "query"/><br/>


                    <Button onClick={props.lookupMovie}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Contact