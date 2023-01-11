
import './App.css';
import { nanoid } from 'nanoid';
import Board from './Board';
function App() {

  const box = ()=>{
    const obj = attributes();
    let array = [];
    for(let i = 0;i<9;i++)
    {
      array.push(<Board id = {obj[i].id} value={obj[i].value} isHeld = {obj[i].isHeld} />);
    }
    return(array);
  }

  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  const attributes = ()=>{
    let array = [];
    for(let i = 0;i<9;i++)
    {
        array.push({
           id:nanoid(),
           value:randomIntFromInterval(1,9),
           isHeld : false,
        });
    }
    return(array);
  }


  const bigBox = ()=>{
    let array = [];
    for(let j = 0;j<9;j++)
    {
      const a1 = box();
      console.log(a1);
      array.push(<div className='sub-grid'>{a1}</div>);
    }
    
    return(array)
  }



  return (
    <main className='main'>
      <div className='grid-container'>
        {bigBox()}
      </div>
    </main>
    
  )
}

export default App;



