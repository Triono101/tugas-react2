import React from "react";
// import * as Validator from 'validatorjs';

const Input = ({label, type, name, onChange}) => {
    return(
        <div>
            <label>{label} : </label>
            <br />
            <input size={'40'} placeholder="Masukkan email dan password" type={type} name={name} onChange={e => onChange(e.target.value)} />
            <br />
        </div>
        
    )
}

const ShowError = ({errors}) => {
    return(
        <p style={{ color: 'red', marginLeft: '19px',paddingTop:'9px'}}>
            {
                errors.map((error, i) => <li key={i}>{error} <br /> </li> )
            }
        </p>
    )
}

class Validation extends React.Component {
    state = {
        email: '',
        password: '',
        errors: []
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const {email, password} = this.state;

        let message = [];

        if(email.length === 0) {
            message = [...message, 'Email tidak boleh kosong'];
        }

        if(password.length === 0) {
            message = [...message, 'Password tidak boleh kosong'];
        }

        const re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.+.co)+[a-zA-Z]{2,}))$/;
        if(!re.test(String(email).toLowerCase())) {
            message = [...message, 'Email yang anda masukkan tidak valid'];
        }

        if(password.length < 8) {
            message = [...message, 'Password minimal delapan karakter']
        }
        
        if(message.length > 0) {
            this.setState ({
                errors: message});
        } else {
            alert(`
                email: ${this.state.email}
                password: ${this.state.password}
                `);
            this.setState({
                errors: []
            })
        }
    }

    render() {
        const style = {
            width: '380px',
            margin: '50px auto 0',
            border: '2px solid dodgerblue',
            boxShadow: '0 5px 10px -1px black',
            borderRadius: '10px'
        }

        return(
            <div style={style}>
                {
                    this.state.errors && <ShowError errors = {this.state.errors} />
                }

                <div className="container">
                    <div className="row content-center">
                        <div className="col-md-15">
                            <br />
                            <h2  style={{fontFamily: 'arial', textAlign:'center', fontSize: '25px', fontWeight: 'bold'}}>Log in to your account</h2>
                            <br /><br />
                            <form onSubmit= {this.handleSubmit}>
                            <Input type="email" name="email" label="Email"
                                onChange= {value => this.setState({email: value})} /> {''}
                            <Input type="password" name="password" label="Password"
                                onChange= {value => this.setState({password: value})} />
                                <br />
                                <button type="submit" className="btn2 btn-primary btn-outline-info btn-lg" style={{ width:'50%', marginLeft:"25%", marginRight:"25%", textAlign:"center", color: "white"}} >Log In</button>  
                                <br /><br />
                            </form>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Validation;