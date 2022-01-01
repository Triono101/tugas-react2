import { Link } from "react-router-dom";
import "./index.css";

const Navigation = () => {
    return(
        <div className="sidebar">
            <Link to="/"><i className="fa fa-fw fa-home"></i>{' '} Home</Link>
            <Link to="/component"><i className="fa fa-fw fa-superpowers"></i>{' '} Component</Link>
            <Link to="/form"><i className="fa fa-fw fa-sign-in"></i>{' '} Form</Link>
            <Link to="/news"><i className="fa fa-fw fa-globe"></i>{' '} News Api</Link>
            <Link to="/about/"><i className="fa fa-fw fa-bookmark"></i>{' '} About</Link>
        </div>
    )
}

export default Navigation;