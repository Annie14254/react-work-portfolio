import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './component-styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import portfolioPhoto from './images/portfolio-photo.jpg'

function Home(props){
    return(
        <div>
            <h1 class = "sectionTitle">About Me</h1>
            <div class = "homeImg">
                <img src={portfolioPhoto} className='portfolioPhoto'/>
            </div>
            <div class = "homeContent">
                <p>
                My name is Annie Ashley, and I am a full-stack developer working primarily in JavaScript and React. I have knowledge of frameworks on both front and back-end development such as Bootstrap, SQL, Sequelize, Express, Node, and Mongo. Through my Bachelor of Science in Wildlife Biology, I gained some experience through coding in R and joined a coding bootcamp at the University of Minnesota to further develop my coding skills. I will graduate in early June with a Full-Stack Web Development Certificate and I hope to further develop my skills with a career in web development. Please refer to the Portfolio and Resume tabs on my website to see examples of my work and a full list of skills that I have. 
                </p><br/>
            </div>
        </div>
    )
}

export default Home