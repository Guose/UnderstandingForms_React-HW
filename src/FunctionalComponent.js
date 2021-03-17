import React, { useState } from 'react';
import './style.css';

function FunctionalComponent() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    function submit(e) {
        e.preventDefault();
        console.log("First Name: ", firstName);
        console.log("Last Name: ", lastName);

        //submit first name and last name to database
    }


    return (
        <div className="container">
            <h1> Hooks Based Form</h1>
            <form>                
                <p>Enter your first and last name</p>
                <input type="text" placeholder="Enter first name" value={firstName} onChange={e => setFirstName(e.target.value)} />
                <input type="text" placeholder="Enter last name" value={lastName} onChange={e => setLastName(e.target.value)} />
                <input type="submit" onClick={e => submit(e)}/>
            </form>
        </div>
    )
}
export default FunctionalComponent;