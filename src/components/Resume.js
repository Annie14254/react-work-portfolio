import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import './component-styles.css';
import 'bootstrap/dist/css/bootstrap.css';
import {useState} from 'react';
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
            <h1 class = "sectionTitle">Resume</h1>
            <div class = "resumeLink">
                To access the most recent copy of my resume, click <a href="https://docs.google.com/document/d/1su4xJnV62CHbnZBUiRbfLcNqiiq-YX7HMyI90MkS2Ws/edit?usp=sharing">here</a>.
            </div>
        </div>
    )
}

export default Resume