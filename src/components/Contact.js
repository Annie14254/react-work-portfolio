import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import 'bootstrap/dist/css/bootstrap.css';
import {useState, useEffect} from "react"
//import './component-styles.css';

function Contact(props){

    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i

    var name = document.getElementById("#nameInput")
    var email = document.getElementById("#emailInput")
    var query = document.getElementById("#queryInput")

    const [emailInput, saveEmailInput] = useState("")
    const isErrorEmail = emailInput === ""
    const [nameInput, saveNameInput] = useState("")
    const isErrorName = nameInput === ""
    const [queryInput, saveQueryInput] = useState("")
    const isErrorQuery = queryInput === ""

    function handleSubmit(e){
        e.preventDefault();
        if(emailInput && emailInput.length && emailInput.match(emailRegex)){
            console.log("success")
        } else if (!emailInput || !nameInput || !queryInput){
            alert("Please fill out all fields and try again.")
        } else if (!emailInput.match(emailRegex)){
            alert("Please input a valid email address.")
        } 
    }

    return(
        <div>
            <h1 class = "sectionTitle">Contact</h1>

            <form className='row mx-3 mt-3'>
                <div className="col-5">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type = "text" name = "name" id = "nameInput" onChange={(e) => saveNameInput(e.target.value)}/><br/>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type = "email" name = "email" id = "emailInput" onChange={(e) => saveEmailInput(e.target.value)}/><br/>
                    <Form.Label>Please add any questions here:</Form.Label><br/>
                    <Form.Control as = "textarea" name = "query" id = "queryInput" onChange={(e) => saveQueryInput(e.target.value)}/><br/>


                    <Button onClick={handleSubmit}>Submit</Button>
                </div>
            </form>
        </div>
    )
}

export default Contact