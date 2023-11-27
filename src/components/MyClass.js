import React, { Component } from 'react';
 
class MyClass extends Component {
  constructor(props)
  {
    super(props);
    this.state = { Heading: "My Class Heading"}

    //The below line is needed if the function is not a arrow function
    //this.updateState = this.updateState.bind(this);
  }

  updateState = () => {
    // Changing state
    this.setState({
      Heading: "Changing heading........",
    });
}

  render() {
    return (
      <div>
        {this.props.para1}
        This is class component.
        <p>{this.state.Heading}</p>
        <button onClick={this.updateState}>Click</button>
      </div>
    );
  }
}
 
export default MyClass;
