import React from "react";
import ChildComponent from "./childComponent";

//counter project
class App extends React.Component {
  // how to initialise state variable
  constructor() {
    super();
    this.state = {
      count: 0,
      greet: "Hello World",
      from: "Coding Ninjas",
    };
  }

  //incremnt mrthod
  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  //decrement method
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  handleChildComponent = () => {
    console.log("Clicked by child Component!");
  };

  render() {
    return (
      <div>
        <button onClick={() => this.handleIncrement()}>Increment</button>
        {this.state.count}
        <button onClick={() => this.handleDecrement()}>Decrement</button>
        <ChildComponent
          greet={this.state.greet}
          from={this.state.from}
          count={this.state.count}
          handleChildComponent={this.handleChildComponent}
        />
      </div>
    );
  }
}

export default App;

// npx create-react-app AppName
