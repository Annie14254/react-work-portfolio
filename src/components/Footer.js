import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(props){
    return(
        <>
            <a href = "https://www.linkedin.com/in/annie-ashley-902056200/" className='footerLink'>LinkedIn <FaLinkedin id='linkedinIcon'/></a>
            <a href = "https://github.com/Annie14254" className='footerLink'>GitHub <FaGithub id="githubIcon"/></a>
        </>
    )
}

export default Footer