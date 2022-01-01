import React from "react";
import FormElement from "./FormElement";
import Validation from "./FormElement/validation";

export default class Form extends React.Component {

    render() {
        return(
            <div className="data">
                <FormElement /> 
                <Validation /> 
            </div>
        )
    }
}