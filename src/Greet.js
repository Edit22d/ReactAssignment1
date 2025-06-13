import React from 'react';
import './Greet.css'

function Greet({name,age,address,school}) {
    console.log(name,'name')
    return(
        <div className='greeting-card'>
            <h1> Hello {name}</h1>
            <p>I am {age} year old </p>
            <p> I stay at {address} </p>
            <p>My school is {school} </p>
        </div>

    )
}


export default Greet;
// JSX is a syntax extension for javascript that allows developers to write HTML -like code within their javascript files and it is recommanded for local developement support.
        //why its used?
//It allows HTML in javascript.
//Its convenience.
//It wraps multiple elements in one parent.

          // Difference btn props and state
// props are inputs components that passes the state down from myApp to each MyButton together with the shared click handler.
        //. while
//state is a component that helps you count the numbers of times a button is clicked.

//hooks in react are functions starting with use and are built-in hooks in API references.

