import React from "react";
import FormElement from "./FormElement";
import Validation from "./FormElement/validation";
import './FormElement/AddStyleForm.css'

export default class Registrasi extends React.Component {

    render() {
        return(
            <div>
                <FormElement /> 
                <Validation /> 
            </div>
        )
    }
}