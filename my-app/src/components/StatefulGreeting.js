// Stateful components - create a class (in PascalCase), this must contain  render method.
// 'this' keyword must be used to access props.
// Stateful class components maintain an internal set of properties, which can be updated and changed with user interaction or other ways.

import React from "react";

class StatefulGreeting extends React.Component {

    constructor(props) { // constructor is where state is defined
        super(props);
        this.state = {  //initial state
        introduction: "Hello, ",
        buttonText: "Change State",
        textColor: "#000",
        count: 0
        };
    }

    handleClick() {
        this.setState({ // setState is an asynchronous function, meaning it executes in the background while while the other code is still executing.
            textColor: this.state.textColor === "#FF5733" ? "#000" : "#FF5733",
            count: this.state.count + 1 
        }, () => {}); //this callback function can execute only after setState is finished - useful in situations when the handleClick functions needs to happen in order.
    }

    render() {
        return (
            <div>
                <h1 style={{ color: this.state.textColor }}>{this.state.introduction}I'm a {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <p>Count: {this.state.count}</p>
            </div>
        )
    }
}

export default StatefulGreeting;