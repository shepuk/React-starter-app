// Props, or properties, are parameters which are passed into a React component in order to tell it what to render.
// Here I have specified greeting and name props which are passed through and rendered.

import React from "react";

const FunctionalGreetingWithProps = (props) => {
    return <h1>Hello, {props.greeting}, I use {props.name}.</h1>;
}

export default FunctionalGreetingWithProps;
