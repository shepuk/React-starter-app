//This is a stateless component - it doesn't change. It will always render the same message, doesn't have any properties and doesn't have the ability to update itself.
// It's just a function that returns some JSX - so it is a stateless functional component.

import React from "react"; //not completely required anymore, but allows for backwards compatibility with older versions of react

//function FunctionalGreeting() {
//    return <h1>Hello from React.</h1>
//}

// The above function converted to an arrow function:
const FunctionalGreeting = () => <h1>Hi, I am stateless.</h1>;

export default FunctionalGreeting; //default keyword here allows the function to be imported into app.js with any name - although this is not best practice.