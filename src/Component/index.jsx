import React from "react";
import "../Addstyle.css"
import Boostrap from "./Bootsrap";
import Content from "./Bootsrap/body";
import Footer from "./Bootsrap/footer";
import FormEmail from "./Bootsrap/form";
import Jumbotron from "./Bootsrap/jumbotron";

export default class Component extends React.Component {

    render() {
        return(
            <div>
                <Boostrap/>
                <Jumbotron/>
                <Content/>
                <FormEmail/>
                <Footer/>
            </div>
        )
    }
}