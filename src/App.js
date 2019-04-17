import React, { Component } from 'react';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
    }
  }


increment = () => {
this.setState ({
  count: this.state.count + 1
})
}
/*
***Increment - is a function that will allow us to increment the Counter
***decrement - is a function that will allow us to decrement the Counter
*/


  render (){
    return (
      <div className="container">
        <div className="navbar">Counter.js</div>
        <div className="counter">
          <h1>{this.state.count}</h1>
          <button type="button" onClick={this.increment}>Increment</button>
          <button type="button">decrement</button>



      </div>
    </div>
    )
  }
}

export default Counter;
