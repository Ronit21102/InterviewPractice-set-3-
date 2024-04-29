import React from "react";

class Xclass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    // Bind methods to the component instance
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  decrement() {
    this.setState({ count: this.state.count - 1 });
  }

  render() {
    return (
      <div>
        <h1>Counter App</h1>
        <span>Count: {this.state.count}</span>
        <br />
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Xclass;
