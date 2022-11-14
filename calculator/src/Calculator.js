import React from 'react';
import './Calculator.css';

function NumberButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.number}
    </button>
  );
}

function OperationButton(props) {
  return (
    <button onClick={props.onClick}>
      {props.operation}
    </button>
  )
}

class NumberPad extends React.Component {
  renderNumber(n) {
    return (
      <NumberButton key={n} number={n} onClick={() => this.props.onClick(n)} />
    );
  }

  render() {
    const numberButtons = [...Array(10).keys()].map(digit => {
      return this.renderNumber(digit);
    });

    return (
      <div className='NumberPad'>
        <div className='NumberPad-row'>{numberButtons.slice(7)}</div>
        <div className='NumberPad-row'>{numberButtons.slice(4, 7)}</div>
        <div className='NumberPad-row'>{numberButtons.slice(1, 4)}</div>
        <div className='NumberPad-row'>{numberButtons.slice(0, 1)}</div>
      </div>
    );
  }
}

class OperationPad extends React.Component {
  renderOperation(op) {
    return (
      <div>
        <OperationButton operation={op} onClick={() => this.props.onClick(op)} />
      </div>
    );
  }

  render() {
    return (
      <div className='OperationPad'>
        {this.renderOperation("+")}
        {this.renderOperation("-")}
        {this.renderOperation("X")}
        {this.renderOperation("/")}
        {this.renderOperation("=")}
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

  executeOperation() {
    // TODO - implement this.
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

  handleOperationPadClick(op) {
    if (op !== '=') {
      this.setState({
        operation: op,
      });
    } else {
      this.executeOperation();
    }
  }

  render() {
    return (
      <div className="Calculator">
        <header className="Calculator-header">
          <div>
            <NumberPad onClick={(n) => this.handleNumberPadClick(n)} />
            <OperationPad onClick={(op) => this.handleOperationPadClick(op)} />
          </div>
        </header>
      </div>
    );
  }
}

export default Calculator;
