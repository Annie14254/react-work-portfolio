import Card from 'react-bootstrap/Card';    
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.css';
import './component-styles.css';

function Project(props){
    return(
        <div className="container">
            <div className="row">
                
                <Card style={{ width: '27rem' }} className = "projectCard">
                    <Card.Img src={props.project.imgSrc} className='projectImg'/>
                    <Card.Body className='projectBody'>
                        <Card.Title className='projectTitle'>{props.project.name}</Card.Title>
                        <Card.Text className='projectDesc'>{props.project.description}</Card.Text>
                        <Card.Text className='projectTech'>Tech Stack: {props.project.techStack}</Card.Text>
                        <a href = {props.project.gitLink} className='btn btn-primary'>Link to GitHub</a><br/>
                        <a href = {props.project.deployLink} className='btn btn-primary'>Link to Deployed Application</a>
                    </Card.Body>
                </Card>
            </div>
        </div>
    )
}

export default Project