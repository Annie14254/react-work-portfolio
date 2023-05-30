import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './component-styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import Project from "./Project.js"

// images only worked when separately required
import booknook from './images/booknook.png'
import weatherapp from './images/weatherapp.png'
import jateeditor from './images/jateeditor.png'
import techblogmvc from './images/techblogmvc.png'
import whattoeat from './images/whattoeat.png'
import workdayscheduler from './images/workdayscheduler.png'



function Portfolio(props){

    const projectData = [
        {
            name: "Workday Scheduler",
            description: "An application for creating a workday schedule.",
            techStack: "jQuery, Day.js, JavaScript, HTML, CSS",
            imgSrc: workdayscheduler,
            gitLink: "https://github.com/Annie14254/workday-scheduler",
            deployLink: "https://annie14254.github.io/workday-scheduler/",
        },
        {
            name: "Weather Dashboard",
            description: "An application to view weather data",
            techStack: "JavaScript, jQuery, HTML, CSS, Bootstrap, OpenWeather API",
            imgSrc: weatherapp,
            gitLink: "https://github.com/Annie14254/weather-app",
            deployLink: "https://annie14254.github.io/weather-app/",
        },
        {
            name: "What To Eat - Recipe Finder",
            description: "An application to view recipes based on user-selected criteria",
            techStack: "JavaScript, jQuery, HTML, CSS, Bulma, MealDB API",
            imgSrc: whattoeat,
            gitLink: "https://github.com/hayessea000/what-to-eat",
            deployLink: "https://hayessea000.github.io/what-to-eat/",
        },
        {
            name: "MVC Tech Blog",
            description: "An application of a browser-based tech blog: users can sign in and make posts.",
            techStack: "MVC, Handlebars, Node, Sequelize, Express, Express-Session, MySQL",
            imgSrc: techblogmvc,
            gitLink: "https://github.com/Annie14254/tech-blog-mvc",
            deployLink: "https://mvc-techblog-aashley.herokuapp.com/",
        },
        {
            name: "The Book Nook",
            description: "A mock e-commerce website: users can sign in and add products to a cart, and create listings.",
            techStack: "JavaScript, Node, HTML, Handlebars, CSS, Bootstrap, Express, Sequelize, Express-Session, MVC, MySQL, Open Library Covers API, Google Books API",
            imgSrc: booknook,
            gitLink: "https://github.com/Annie14254/ecommerce-website",
            deployLink: "https://the-book-nook-grp-6.herokuapp.com/",
        },
        {
            name: "JATE Text Editor",
            description: "Backend only: A Progressive Web Application (PWA) that provides a text editor that can be used offline.",
            techStack: "JavaScript, IndexedDB API, Node",
            imgSrc: jateeditor,
            gitLink: "https://github.com/Annie14254/jate-text-editor",
            deployLink: "https://jate-text-editor-aashley.herokuapp.com/",
        },
    ]

    return(
        <div>
            <h1 class = "sectionTitle">Portfolio</h1>

            <div>
                {/* import Project component for each project */}
                {projectData.map(project => {
                    return(
                        <div>
                            <Project project = {project}/>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Portfolio