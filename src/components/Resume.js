import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './component-styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
import resumePdf from './pdf/aashleyResume.pdf'
import { FaFilePdf } from "react-icons/fa";
// import { Document, Page } from 'react-pdf';

// // imported from react-pdf documentation
// import { pdfjs } from 'react-pdf';

// pdfjs.GlobalWorkerOptions.workerSrc = new URL(
//   'pdfjs-dist/build/pdf.worker.min.js',
//   import.meta.url,
// ).toString();

function Resume(props){

    // removed code from react-pdf, was breaking the site

    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

    // function onDocumentLoadSuccess({ numPages }) {
    //     setNumPages(numPages);
    // }

    return(
        <div>
            <h1 className = "sectionTitle">Resume</h1>
            <div className = "resumeLink">
                To access the most recent copy of my resume, click <a href="https://docs.google.com/document/d/1su4xJnV62CHbnZBUiRbfLcNqiiq-YX7HMyI90MkS2Ws/edit?usp=sharing">here</a>.
            </div>
            <div className='resumeDownload'>
                To download my resume, click on the button below. 
                <div>
                    <a
                    href={resumePdf}
                    download="Resume-PDF"
                    target="_blank"
                    rel="noreferrer"
                    >
                        <Button>Download Resume as PDF <FaFilePdf id = "pdfIcon"/></Button>
                    </a>
                </div>
                <div>
                    <br/>
                    <h5>Skills</h5>
                    <h6>Front-End Development Frameworks</h6>
                        <ul>
                            <li>HTML5</li>
                            <li>CSS3</li>
                            <li>Bootstrap</li>
                            <li>JavaScript ES6+</li>
                            <li>Handlebars</li>
                            <li>React</li>
                        </ul>
                    <h6>Back-End Development Frameworks</h6>
                        <ul>
                            <li>Express</li>
                            <li>Node</li>
                            <li>MySQL and NoSQL</li>
                            <li>MongoDB</li>
                        </ul>
                    <h6>Full-Stack Development Skills</h6>
                        <ul>
                            <li>Model View Controller (MVC)</li>
                            <li>Object Relational Mapping (ORM)</li>
                            <li>Progressive Web Applications (PWA)</li>
                            <li>Agile Web Development</li>
                        </ul>
                </div>
            </div>
        </div>
    )
}

export default Resume