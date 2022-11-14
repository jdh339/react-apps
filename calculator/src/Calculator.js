import React from 'react';
import './Calculator.css';

function NumberButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.number}
    </button>
  );
}

class NumberPad extends React.Component {
  renderNumber(n) {
    return (
      <NumberButton key={n} number={n} onClick={() => this.props.onClick(n)}/>
    );
  }

  render() {
    const numberButtons = [...Array(10).keys()].map(digit => {
      return this.renderNumber(digit);
    });

    return (
      <div className='NumberPad'>
        <div className='NumberPad-row'>{numberButtons.slice(7)}</div>
        <div className='NumberPad-row'>{numberButtons.slice(4,7)}</div>
        <div className='NumberPad-row'>{numberButtons.slice(1,4)}</div>
        <div className='NumberPad-row'>{numberButtons.slice(0,1)}</div>
      </div>
    );
  }
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
      operation: null,
      operands: Array(2).fill(null),
    }
  }

  handleNumberPadClick(n) {
    const operands = this.state.operands.slice();
    if (!this.state.operation) {
      operands[0] = n;
    } else {
      operands[1] = n;
    }
    this.setState({
      operands: operands
    });
  }

  render() {
    return (
      <div className="Calculator">
        <header className="Calculator-header">
          <NumberPad onClick={() => this.handleNumberPadClick()}/>
        </header>
      </div>
    );
  }
}

export default Calculator;
