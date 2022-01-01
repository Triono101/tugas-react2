import Navigation from "./Navigation";
import {BrowserRouter as Router, Route, Routes, } from "react-router-dom";

import Form from "./Form";
import Contact from "./About";
import Home from "./Home";
import Portofolio from "./Portofolio";
import Post from "./Post";
import About from "./About";
import Page from "./News Api";

const Routing = () => {

    return(
        <div>
            <Router>
                <Navigation />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/component/*" element={<Portofolio/>} />
                    <Route path="/form/*" element={<Form />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/news" element={<Page />} />
                    <Route path="/about/*" element={<About />} />
                    <Route path="/post/:Id" element={<Post />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routing;