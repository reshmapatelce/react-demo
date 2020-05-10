import React, { Component } from 'react';

const initState = {
    name: '',
    email: '',
    contact: ''
}

class Myform extends Component {
    constructor() {
        super();
        this.state = initState;
    }

    handleChange = event => {
        this.setState({ [event.target.name]: event.target.value });
        console.log(this.state);
    }
    handleResetValue = () => {
        this.setState(initState);
        console.log(this.state);
    }
    render() {
        let {name, email, contact} = this.state;
        return (
            <div>
                Name: <input className="form-control" type="text" name="name" value={name} onChange={this.handleChange} /><br /><br />
                Email: <input className="form-control" type="text" name="email" value={email} onChange={this.handleChange} /><br /><br />
                contact: <input className="form-control" type="text" name="contact" value={contact} onChange={this.handleChange} /><br /><br />
                <input type="button" value="Submit" />
                <input type="button" value="Reset" onClick={this.handleResetValue} />

                <div>
                    Name: {name} <br />
                    Email: {email} <br />
                    Contact: {contact}
                </div>
            </div>
        )
    }
}

export default Myform;