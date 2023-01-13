
import './App.css';
import { nanoid } from 'nanoid';
import Board from './Board';
import newStartingBoard from './sudoku-generator';
import React from 'react';


function App() {




   


  const generated_puzzle = newStartingBoard(10)[1];



  const [puzzle_values,setPuzzle_values] = React.useState(puzzle_generate())
  console.log(generated_puzzle);
  let count = 0;
  function puzzle_generate()
  { 
    let pz_v = []
    for(let k = 0;k<9;k+=3)
    {
      for(let i = 0+k;i<3+k;i++)
      {
       for(let j = 0;j<3;j++)
       {
        pz_v.push(generated_puzzle[i][j]);
       }
   
      }
      for(let i = 0+k;i<3+k;i++)
      {
       for(let j = 3;j<6;j++)
       {
        pz_v.push(generated_puzzle[i][j]);
       }
   
      }
      for(let i = 0+k;i<3+k;i++)
      {
       for(let j = 6;j<9;j++)
       {
        pz_v.push(generated_puzzle[i][j]);
       }
   
      }
    }
    return(pz_v);   
  }
  








function handleChange(id)
{
  console.log(id);
}












  const box = ()=>{
    const obj = attributes();
    let array = [];
    for(let i = 0;i<9;i++)
    {
      array.push(<Board id = {obj[i].id} value={obj[i].value} isHeld = {obj[i].isHeld} handleChange = {()=>handleChange(obj[i].id)}/>);
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


  const [bigBoss,setBigBoss] = React.useState(bigBox);

  return (
    <main className='main'>
      <div className='grid-container'>
        {bigBoss}
      </div>
    </main>
    
  )
}

export default App;



