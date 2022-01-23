import { useState, useEffect } from 'react'
import './App.css';
import data from './data';
import GetBtns from './GetBtns';
import List from './List';

function App() {
  let [btns, setBtns] = useState([])
  const [currentPage, setCurrentPage] = useState(0)
  const [currentBtns, setCurrentBtns] = useState(0)
  const itemsPerPage = 25

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
  }

  const prevBtns = () => {
    if(currentBtns === 0) {
      return ''
    }
    else {
      return setCurrentBtns(currentBtns-1)
    }
  }

  const nextBtns = () => {
    if(currentBtns*5 + 5 > btns.length) {
      return ''
    }
    else {
      return setCurrentBtns(currentBtns+1)
    }
  }

  useEffect(() => {
    getBtns()
  }, [])
  
  return (
    <div>
      <List data={data} currentPage={currentPage} itemsPerPage={itemsPerPage} />
      
      <GetBtns btns={btns} prevBtns={prevBtns} currentBtns={currentBtns} nextBtns={nextBtns} setPage={setPage}/>

    </div>
  );
}

export default App;
