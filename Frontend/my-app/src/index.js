import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Axios from 'axios';
import axios from 'axios';
//Public


var _wonOnce = false;
var _drawOnce = false;
var _winner;
var _plays = Array(9);

let status;

function sendGame(win, plays){
  const _win = win;
  const _plays = plays; 

  Axios.post("https://server-bring.herokuapp.com/save", {
      Winner: _win, 
      Plays: _plays,
    }).then(() => {
      alert('Success')
    });
}
  
  function Square(props){
    if(props.value == "X"){
      return (
        <button id={props.id} className="square" target="X" onClick={props.onClick}>
          {props.value}
        </button>
      );
    } else if(props.value == "O") {
      return (
        <button id={props.id} className="square" target="O" onClick={props.onClick}>
          {props.value}
        </button>
      );
    } else {
      return (
        <button id={props.id} className="square" target="blank" onClick={props.onClick}>
          {props.value}
        </button>
      );
    }
    
  }

  class Board extends React.Component {

    renderSquare(i) {
      return (
        <Square
          id={"p"+i}
          value={this.props.squares[i]}
          onClick={() => this.props.onClick(i)}
        />
      );
    }
  
    render() {    
      return (
        <div>
          <div className="board-row">
            {this.renderSquare(0)}
            {this.renderSquare(1)}
            {this.renderSquare(2)}
          </div>
          <div className="board-row">
            {this.renderSquare(3)}
            {this.renderSquare(4)}
            {this.renderSquare(5)}
          </div>
          <div className="board-row">
            {this.renderSquare(6)}
            {this.renderSquare(7)}
            {this.renderSquare(8)}
          </div>
        </div>
      );
    }
  }

  
  class Game extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        history: [{
          squares: Array(9).fill(null),
        }],
        gameWon: false,
        stepNumber: 0,
        xIsNext: true,
      };
    }


    handleClick(i) {
      const history = this.state.history.slice(0, this.state.stepNumber + 1);
      const current = history[history.length - 1];
      const squares = current.squares.slice();
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      squares[i] = this.state.xIsNext ? 'X' : 'O';
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        xIsNext: !this.state.xIsNext,
      });
    }

    jumpTo(step) {
      this.setState({
        stepNumber: step,
        xIsNext: (step % 2) === 0,
      });
      if(step == 0){
        this.setState({
          history: [{
            squares: Array(9).fill(null),
          }],         
        });
        _drawOnce = false;
        _wonOnce = false;
      } 
    }


    render() {
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const winner = calculateWinner(current.squares);   

      const moves = history.map((step, move) => {
        const desc = move ?
          'Go to move #' + move :
          'Go to game start';                
        return (      
          <li className="list" key={move}>
            <button className="bt" onClick={() => this.jumpTo(move)}>{desc}</button>
          </li>
        );
      });
      if (winner) {
        status = 'Winner: ' + winner;               
        if(!_wonOnce) {
          _wonOnce = true;
          _drawOnce = true;
          _winner = winner;
          _plays = current.squares;
          sendGame(_winner, _plays);  
        }
      } else if (history.length == 10) {
        status = "DRAW!";
        if (!_drawOnce) {          
          _wonOnce = true;
          _drawOnce = true;
          _plays = current.squares;
          sendGame("DRAW", _plays);
        }
                
      } else {
        status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }

      return (
        <div class="canvas">
          <div className="game" >
              <div className="game-board">
                <Board 
                  squares={current.squares} 
                  onClick={(i) => this.handleClick(i)}
                />
              </div>
              <div className="game-info">
                <div><h2 class="gstatus">{status}</h2></div>
                <div class="group">
                  <ol class="buttonList">{moves}</ol>
                </div>            
              </div>
          </div>
        </div>
      );
    }
  }

  
  // ========================================

  // class Child extends React.Component{
  //   render(){
  //     return (
  //       <div>
  //         <p className="p">Child Loaded</p>
  //       </div>
  //     )
  //   }
  // };

  
  
  ReactDOM.render(
    <Game />,
    document.getElementById('root')
  );
  

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  //this