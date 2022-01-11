import {increment,decrement,
    reset
}
     from './action';
import React,{ Component }from "react";

import {connect} from 'react-redux'

class Counter extends Component {
  render() {
    return (
      <div>
         <p>Counter: {this.props.buttonValue}</p>
        <button onClick={this.props.increment}>
          INCREMENT 
        </button>
        <button onClick={this.props.decrement}>
          DECREMENT 
        </button>
        <button onClick={this.props.reset}>
          RESET 
        </button>
        </div>
        );
  }
} 
const mapStateToProps = (state) => {
    return {
      buttonValue: state.counter.count,
    };
  };
  const mapDispatchToProps = (dispatch) => {
    return {
      increment: () => dispatch(increment()),
      decrement: () => dispatch(decrement()),
      reset: () => dispatch(reset()),
    };
  };
  export default connect(mapStateToProps, mapDispatchToProps)(Counter);