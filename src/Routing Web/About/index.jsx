import React from "react"
import "./About/css/reset.css"
import "./About/css/style.css"
import { Link, Route, Routes } from "react-router-dom";

// Import Images
import logo from './About/img/thumbs/diary.png';
import logo1 from './About/img/thumbs/sung.png';
import logo2 from './About/img/thumbs/sunset.png';

import logo3 from './About/img/detail/profile.png';
import logo4 from './About/img/detail/skill.png';
import logo5 from './About/img/detail/map.png';


const About = () => {
    return(
        <div className="main" >
            <h3 className="personal2">About Us</h3>
            <br />
            <div className="element">
                <ul className="gallery">
                    <li>
                        <Link to="/about/profile">
                            <img src={logo} alt="Diary" />
                            <span className="word">PROFILE</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about/skill">
                            <img src={logo1} alt="Mori Jung" />
                            <span className="word">CAPABILITY</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/about/adress">
                            <img src={logo2} alt="Panorama" />
                            <span className="word">ADDRESS</span>
                        </Link>
                    </li>

                    <div className="clear" />
                </ul>  
            </div>
            <br />
            <hr />
            <br />
            <Routes>
                <Route path="/profile" element={
                    <p className="element1 row">
                        <p className="col">
                            <img className="image1" src={logo3} alt="" />
                        </p>
                        <p className="col">
                            <br />
                            <h6 className="fw-bold fs-3 fa fa-user-secret">{' '} Self Profile</h6> <hr />
                            <p className="profile fs-6">
                                Name : Triono <br />
                                Age : 27 Years old <br />
                                Ocupation : Self-Employed <br />
                                Status : Eduwork Student <br />
                                Activity : Learning Programming Language <br />
                                Big Dream : To be mentally, financially and emotionally stable.
                            </p>
                        </p>
                    </p>}/>
                <Route path="/skill" element={
                    <p className="element2 row">
                        <p className="col">
                            <img className="image2" src={logo4} alt="" />
                        </p>
                        <p className="col">
                            <h6 className="all fw-bold fs-3 fa fa-bar-chart">{' '}  Skills</h6>
                            <p className="skill fs-6">
                            I am fluent in Javanese and Indonesian, in addition to being able of speaking English and Korean as well. <br /> I also Capable of using measurement tools such as Caliper, Micrometer and Dial gauge.
                            </p>
                            <br />
                            <h6 className="fw-bold fs-3 fa fa-bar-chart">{' '}  Other Skills</h6>
                            <p className="skill fs-6">
                            Makan & Tidur, introspeksi diri, mengaji, menghormati orang tua, andhap asor, menghabiskan waktu sehari-hari, serta bersahabat dekat dengan rebahan, <br /> me-time dan kegabutan.
                            </p>
                        </p>
                    </p>}/>
                <Route path="/adress" element={
                    <p className="element3 row">
                        <p className="col">
                        <h6 className="al fw-bold fs-3 fa fa-map-marker">{' '} Adress</h6> <hr />
                            <p className="adress fs-6">
                            Jl. Ir. Sutami, Gn. Pasir Jaya, Sekampung Udik,
                            Kabupaten Lampung Timur, Lampung, <br /> Indonesia - 34384
                            </p>
                        </p>
                        <p className="col">
                            <img className="image3" src={logo5} alt="" />
                        </p>
                    </p>}/>
            </Routes>
        </div>
    )
}

export default About;