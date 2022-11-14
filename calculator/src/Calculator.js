import React from 'react';
import './Calculator.css';

function NumberPadButton(props) {
  return (
    <button className='numberpad-button' onClick={props.onClick}>
      {props.value}
    </button>
  );
}

function OperationPadButton(props) {
  return (
    <button className='operationpad-button' onClick={props.onClick}>
      {props.operation}
    </button>
  )
}

function DisplayScreen(props) {
  return (
    <div className='display-screen'>
      <span className='display-screen-content'>
        {props.value}
      </span>
    </div>
  )
}

class NumberPad extends React.Component {
  renderNumberButton(n) {
    return (
      <NumberPadButton key={n} value={n} onClick={() => this.props.onClickNumber(n)} />
    );
  }

  renderSpecialButton(s) {
    return (
      <NumberPadButton key={s} value={s} onClick={() => this.props.onClickSpecial(s)} />
    );
  }

  render() {
    const numberButtons = [...Array(10).keys()].map(digit => {
      return this.renderNumberButton(digit);
    });

    return (
      <div className='numberpad'>
        <div className='numberpad-row'>
          {this.renderSpecialButton('x\u00B2')}
          {this.renderSpecialButton('\u221Ax')}
          {this.renderSpecialButton('C')}
        </div>
        <div className='numberpad-row'>{numberButtons.slice(7)}</div>
        <div className='numberpad-row'>{numberButtons.slice(4, 7)}</div>
        <div className='numberpad-row'>{numberButtons.slice(1, 4)}</div>
        <div className='numberpad-row'>
          {this.renderSpecialButton('+/-')}
          {numberButtons[0]}
          {this.renderSpecialButton('.')}
        </div>
      </div>
    );
  }
}

class OperationPad extends React.Component {
  renderOperation(op) {
    return (
      <div>
        <OperationPadButton operation={op} onClick={() => this.props.onClick(op)} />
      </div>
    );
  }

  render() {
    return (
      <div className='operationpad'>
        {this.renderOperation("+")}
        {this.renderOperation("-")}
        {this.renderOperation("*")}
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
      operands: Array(2).fill(""),
    }
  }

  executeOperation() {
    // TODO - implement this.
  }

  // Handles the digits 0-9.
  handleNumberPadNumberClick(n) {
    const operands = this.state.operands.slice();
    if (!this.state.operation) {
      operands[0] += n;
    } else {
      operands[1] += n;
    }
    this.setState({
      operands: operands
    });
  }

  // Handles the . and +/- buttons.
  handleNumberPadSpecialClick(s) {
    if (s === 'C') {
      this.setState({
        result: null,
        operation: null,
        operands: Array(2).fill(""),
      })
    }
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
        <div className='display-area'>
          <DisplayScreen value={this.state.operands[0]} />
        </div>
        <div className='button-area'>
          <NumberPad
            onClickNumber={(n) => this.handleNumberPadNumberClick(n)}
            onClickSpecial={(s) => this.handleNumberPadSpecialClick(s)}
          />
          <OperationPad onClick={(op) => this.handleOperationPadClick(op)} />
        </div>
      </div>
    );
  }
}

export default Calculator;
