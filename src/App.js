
import './App.css';
import { nanoid } from 'nanoid';
import Board from './Board';
import newStartingBoard from './sudoku-generator';


function App() {

  const generated_puzzle = newStartingBoard(10)[1];
  console.log(generated_puzzle);
  let count = 0;
  let puzzle_values = []
  function puzzle_generate()
  {
    for(let k = 0;k<9;k+=3)
    {
      for(let i = 0+k;i<3+k;i++)
      {
       for(let j = 0;j<3;j++)
       {
         puzzle_values.push(generated_puzzle[i][j]);
       }
   
      }
      for(let i = 0+k;i<3+k;i++)
      {
       for(let j = 3;j<6;j++)
       {
         puzzle_values.push(generated_puzzle[i][j]);
       }
   
      }
      for(let i = 0+k;i<3+k;i++)
      {
       for(let j = 6;j<9;j++)
       {
         puzzle_values.push(generated_puzzle[i][j]);
       }
   
      }
    }   
  }
  puzzle_generate();
  



























  function randomIntFromInterval(min, max) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }


  const box = ()=>{
    const obj = attributes();
    let array = [];
    for(let i = 0;i<9;i++)
    {
      array.push(<Board id = {obj[i].id} value={obj[i].value} isHeld = {obj[i].isHeld} />);
    }
    return(array);
  }

  
  
  const attributes = ()=>{
    let array = [];
    for(let i = 0;i<9;i++)
    {
        array.push({
           id:nanoid(),
           value:puzzle_values[count],
           isHeld : false,
        });
        count++;
    }
    return(array);
  }


  const bigBox = ()=>{
    let array = [];
    for(let j = 0;j<9;j++)
    {
      const a1 = box();
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



