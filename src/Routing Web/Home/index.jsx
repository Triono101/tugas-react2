import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../Home/button.css'

const Home = () => {

    return(
        <div className="main">
            <div className="para">
                <h6 className="poin">HOME PAGE</h6>
                <q className="pointer">"Tugas React Router"</q>
                <br />
                <br />
                <p>
                    <Button className="btn3"><Link to="/post/Contact Personal">{' '} Contact</Link></Button>
                </p>
                <br />
                <div>
                    <q className="trial">"Web trial ini dibuat utuk mengerjakan tugas react router, dengan membuat <br /> routing ke beberapa tugas sebelumnya."</q>
                </div>
            </div>
        </div>
    )
}

export default Home;