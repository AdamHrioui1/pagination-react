import React from 'react';

function GetBtns({btns, prevBtns, currentBtns, nextBtns, setPage}) {
  return <div>
      
      <button onClick={prevBtns} >L</button>
      {
        btns.slice(currentBtns*5, currentBtns*5+5).map((btn, index) => {
          return (
            <button key={index} onClick={() => setPage(btn)} >{btn}</button>
          )
        })
      }
      <button onClick={nextBtns}>R</button>
  </div>;
}

export default GetBtns;
