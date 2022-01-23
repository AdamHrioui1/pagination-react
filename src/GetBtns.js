import React from 'react';

function GetBtns({btns, prevBtns, currentBtns, nextBtns, setPage, currentBtn}) {
  return <div className='btns_conatiner'>
      <button onClick={prevBtns} >L</button>
      {
        btns.slice(currentBtns*5, currentBtns*5+5).map((btn, index) => {
          return (
            <button className={currentBtn === btn ? 'active' : ''} key={index} onClick={() => setPage(btn)} >{btn}</button>
          )
        })
      }
      <button onClick={nextBtns}>R</button>
  </div>;
}

export default GetBtns;
