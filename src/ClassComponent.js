import React, { Component } from 'react';
import './style.css';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
        }
        this.submit = this.submit.bind(this);
        this.setFirstName = this.setFirstName.bind(this);
        this.setLastName = this.setLastName.bind(this);
    }
    submit(e) {
        console.log("Submitted", e);
        e.preventDefault();
        console.log(this.state.firstName);
        console.log(this.state.lastName);

        //submit first name and last name to database
    }
    setFirstName(e) {
        // this will update the console when you type in the input field in real time
        //console.log(e.target.value);
        this.setState({ firstName: e.target.value });
    }
    setLastName(e) {
        //console.log(e.target.value);
        this.setState({ lastName: e.target.value });
    }
    render() {

        return (
            <div className="container">
                <h1> Class Base Form </h1>
                <form>
                    <p>Enter your first and last name</p>
                    <input type="text" placeholder="Enter first name" value={this.state.firstName} onChange={e => this.setFirstName(e)} />
                    <input type="text" placeholder="Enter last name" value={this.state.lastName} onChange={e => this.setLastName(e)} />
                    <input type="submit" onClick={this.submit} />
                </form>
            </div>
        )
    }
}

export default FormComponent;