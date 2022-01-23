import { useState, useEffect } from 'react'
import './App.css';
import data from './data';
import GetBtns from './GetBtns';
import List from './List';

function App() {
  let [btns, setBtns] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [currentBtns, setCurrentBtns] = useState(0)
  const [currentBtn, setCurrentBtn] = useState(1)
  const itemsPerPage = 10

  const getBtns = () => {
    btns = []
    const btnNumber = Math.ceil(data.length / itemsPerPage)
    for (let i = 1; i <= btnNumber; i++) {
      btns.push(i)      
    }
    setBtns(btns)
  }

  const setPage = (btn) =>  {
    setCurrentPage(btn - 1)
    setCurrentBtn(btn)
  }

  const prevBtns = () => {
    if(currentBtns <= 0) {
      return ''
    }
    else {
      return setCurrentBtns(currentBtns-1)
    }
  }

  const nextBtns = () => {
    if(currentBtns*5 + 5 >= btns.length) {
      console.log('dsdqqsdqsd');
      return ''
    }
    else {
      console.log(currentBtns);
      return setCurrentBtns(currentBtns+1)
    }
  }

  useEffect(() => {
    getBtns()
  }, [])
  
  return (
    <div>
      <h1>Hello Bro</h1>
      <List data={data} currentPage={currentPage} itemsPerPage={itemsPerPage} />

      <GetBtns btns={btns} prevBtns={prevBtns} currentBtns={currentBtns} nextBtns={nextBtns} setPage={setPage} currentBtn={currentBtn} />

    </div>
  );
}

export default App;
