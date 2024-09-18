import React, { Component } from "react";

export default class ClassComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1,
    };
  }

  componentDidMount() {
    console.log("component rendered");
  }
  componentDidUpdate() {
    console.log("component updated");
  }
  componentWillUnmount() {
    console.log("component unmounted");
  }

  render() {
    return (
      <>
        <div>ClassComponent</div>

        <button
          onClick={() => {
            this.setState({ counter: this.state.counter + 1 });
          }}
        >
          increase {this.state.counter}
        </button>
      </>
    );
  }
}
