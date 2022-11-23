import React from "react";
import GrandChildComponent from "./GrandChildComponent";

class ChildComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      place1: "Bihar",
      place2: "Mumbai",
      place3:'Chennai',
      place4: 'Delhi'
    };
  }
  render() {
    return (
      <div>
        <p>{this.props.greet}</p>
        <p>{this.props.from}</p>
        <p>{this.props.count}</p>
        <button onClick={() => this.props.handleChildComponent()}>
          Call Parent method
        </button>
        <GrandChildComponent
          state1={this.state.place1}
          state2={this.state.place2}
          greet={this.props.greet}
        />
         <GrandChildComponent
          state1={this.state.place3}
          state2={this.state.place4}
          greet={this.props.greet}
        />
      </div>
    );
  }
}

export default ChildComponent;
