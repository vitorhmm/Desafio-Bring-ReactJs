import React from "react";
import './App.css';
import { useState } from "react";
import Axios from "axios";
import ReactDOM from 'react-dom';

import { render } from 'react-dom';

var boxValue = 0;

function handleChange(props) {
  alert(props);
  //boxValue = props;
}

let textInput = React.createRef();

function handleClick() {
  alert(textInput.current.value);
}



function App() {


  const [playList, setPlayList] = useState([]);

  const [game, setGame] = useState([]);

  function undef(){
    if (game.map((val, key) => key == 0)) {
      alert("teste"+game.map((val, key) => val.winner));
    }
  }

  function Vox(){
    return(
      <button>Botão</button>
    );
  }

  var teste = "Mamou";


  function ox(){
    teste = "Legal"
  }

  const getGame = (id) => {
    Axios.get(`http://localhost:3001/get-info/${id}`).then((response) => {
      setGame(response.data);
      
    });
  };

  


  return (
    <body class="body">
      <div class="header">
      <form action="http://localhost:3000/">
        <input type="submit" value="Game" id="nav" class="bt"/>
      </form>
      <h2>Tic Tac Toe Registry</h2>
      </div>
    <div class="main">
        <input class="searchBox" type="text" placeholder="Search..." name="title" autoComplete="off" ref={textInput}/>
        <button class="bt" onClick={() => {getGame(textInput.current.value);}}>Get Info</button>

        {game.map((val, key) => {        
          return (
            //alert(game.map((val, key) => val.winner)),            
            <div class="container">
              <div class="winInfo">
                <label class="an" result={val.winner}></label><label content={val.winner} class="info">{val.winner}</label>
              </div>
              <div class="game-grid">
                <div class="game-cell"><label id={val.p1}>{val.p1}</label></div>
                <div class="game-cell"><label id={val.p2}>{val.p2}</label></div>
                <div class="game-cell"><label id={val.p3}>{val.p3}</label></div>
                <div class="game-cell"><label id={val.p4}>{val.p4}</label></div>
                <div class="game-cell"><label id={val.p5}>{val.p5}</label></div>
                <div class="game-cell"><label id={val.p6}>{val.p6}</label></div>
                <div class="game-cell"><label id={val.p7}>{val.p7}</label></div>
                <div class="game-cell"><label id={val.p8}>{val.p8}</label></div>
                <div class="game-cell"><label id={val.p9}>{val.p9}</label></div>
              </div>
            </div>
            
          );
        })}
        
    </div>
    </body>
  );
}

export default App;
