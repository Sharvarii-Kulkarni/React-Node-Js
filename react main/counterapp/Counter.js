import React, {Component} from 'react';
import './Counter.css';

class Counter extends Component {
    constructor(props) {
      super(props); // allows us to use this.props
      this.state = {
        count: 0 // Initial state
      };
    }
  
    // Method to increase the count
    incrementCount = () => {
      this.setState({
        count: this.state.count + 1
      });
    };
  
    render() {
      return (
        <div style={{ border: '1px solid #ccc', padding: '20px', marginTop: '20px' }}>
          <h2>Counter Component</h2>
          <p>Count from State: {this.state.count}</p>
          <p>Count from Props: {this.props.initialCount}</p>
          <button onClick={this.incrementCount}>Increment</button>
        </div>
      );
    }
  }
  
  export default Counter;