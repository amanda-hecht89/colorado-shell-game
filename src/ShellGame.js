import React, { useState } from 'react';
import './ShellGame.css';

export default function ShellGame() {

  const [win, setWin] = useState(0);
  const [loss, setLoss] = useState(0);
  const [reveal1, setReveal1] = useState(false);
  const [reveal2, setReveal2] = useState(false);
  const [reveal3, setReveal3] = useState(false);

  function handleShellClick(guess) {
    resetStyles();
    const randomNum1 = Math.ceil(Math.random() * 3);
    if (randomNum1 === guess) {
      if (randomNum1 === 1) {
        setReveal1(true);
      } if (randomNum1 === 2) {
        setReveal2(true);
      } if (randomNum1 === 3) {
        setReveal3(true);
      }
      setWin(win + 1) ;
    } else { 
      if (randomNum1 === 1) {
        setReveal1(true);
      } if (randomNum1 === 2) {
        setReveal2(true);
      } if (randomNum1 === 3) {
        setReveal3(true);
      }
      setLoss(loss + 1);
    }}

  function resetStyles() {
    setReveal1(false);
    setReveal2(false);
    setReveal3(false);
  }  
  return (
    <div>
      <h1>Shell Game</h1>
      <div className='explain'>
        <p className='para3'>
            This game was something I learned how to do the second week of school
            on Vanilla JavaScript.<br/> Once I learned ReAct, I decided this would be a fun thing
            to learn to rebuid in ReAct for use in my portfolio. ENJOY!
        </p>
        <p className='para3'>
            Welcome to Colorado! I love living here and doing all the wonderful things there
            there is to do here, include hiking. But be careful, you might spot a YETI!!!!!
        </p>
      </div>
      <div>
        <div className='shellGame'>
          <div className='shellsss shell1'>
            <h2>ASPEN</h2>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className={ reveal1 ? 'reveal ball' : 'hide' } src='./Images/yeti.png'/>
            <button onClick={() => handleShellClick(1)} className='button'>PICK HERE</button><br/><br/><br/><br/>
          </div>
          <div className='shellsss shell2'>
            <h2>ESTES PARK</h2>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className={ reveal2 ? 'reveal ball' : 'hide' } src='./Images/yeti.png'/>
            <button onClick={() => handleShellClick(2)} className='button'>PICK HERE</button><br/><br/><br/><br/>
          </div>
          <div className='shellsss shell3'>
            <h2>BRECKENRIDGE</h2>
            <img className='shell' src='./Images/colorado2.png' height='200'/>
            <img className={ reveal3 ? 'reveal ball' : 'hide' } src='./Images/yeti.png'/>
            <button onClick={() => handleShellClick(3)} className='button'>PICK HERE</button>
          </div>
        </div>
      </div>






      <div className='results'>
        <h2>RESULTS!</h2>
        <div>
          <p className='para4'>
            WINS:
            <span className='win'>{win}</span>
          </p>
        </div>
        <div>
          <p className='para4'>
            LOSSES:
            <span className='loses'>{loss}</span>
          </p>
        </div>
        <div>
          <p className='para4'>
            TOTAL GAMES:
            <span className='total'>{win + loss}</span>
          </p>
        </div>
      </div>
    </div>
  );
}
