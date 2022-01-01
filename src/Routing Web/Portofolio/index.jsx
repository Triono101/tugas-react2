import React from "react";
import Boostrap from "./Bootsrap";
import Content from "./Bootsrap/body";
import Footer from "./Bootsrap/footer";
import FormEmail from "./Bootsrap/form";
import Jumbotron from "./Bootsrap/jumbotron";

export default class Portofolio extends React.Component {

    render() {
        return(
            <div className="data">
                <Boostrap />
                <Jumbotron />
                <Content />
                <FormEmail />
                <Footer />
            </div>
        )
    }
}