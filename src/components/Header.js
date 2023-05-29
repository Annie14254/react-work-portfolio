import 'bootstrap/dist/css/bootstrap.css';
import "../App.css"


function Header(props){
    return(
        <ul className='list-group list-group-horizontal'>
          <li className="list-group-item col-sm-12 col-md-4 col-lg-4"><h1>Annie Ashley</h1></li>
            <li className="list-group-item col-sm-12 col-md-2 col-lg-2 link" onClick={() => props.setCurrentPage("Home")}>Home</li>
            <li className="list-group-item col-sm-12 col-md-2 col-lg-2 link" onClick={() => props.setCurrentPage("Portfolio")}>Portfolio</li>
            <li className="list-group-item col-sm-12 col-md-2 col-lg-2 link" onClick={() => props.setCurrentPage("Resume")}>Resume</li>
            <li className="list-group-item col-sm-12 col-md-2 col-lg-2 link" onClick={() => props.setCurrentPage("Contact")}>Contact</li>
        </ul>
    )
}

export default Header;