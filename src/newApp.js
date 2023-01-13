
import './App.css';
import { nanoid } from 'nanoid';
import Board from './Board';
import newStartingBoard from './sudoku-generator';
import React from 'react';


function App() {


  const [puzzle_values,setPuzzle_values] = React.useState(puzzle_generate())
  let count = 0;
  function puzzle_generate()
  { 
    const generated_puzzle = newStartingBoard(10)[1];
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
  

function handleChange(id,value)
{
  console.log("JAY")
  
}

  const box = ()=>{
    const obj = attributes();
    let array = [];
    for(let i = 0;i<9;i++)
    {
      array.push(<Board id = {obj[i].id} value={obj[i].value} isHeld = {obj[i].isHeld} handleChange = {()=>handleChange(obj[i].id,obj[i].value)}/>);
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
      array.push(a1);
    }
    return(array)
  }


  const [bigBoss,setBigBoss] = React.useState(bigBox);
  
  const actual_board = bigBoss.map((item)=>{
   return (<div className='sub-grid' >{item}</div>)

  })
  React.useEffect(()=>{'Hi Jay how r u'},[bigBoss]);

  return (
    <main className='main'>
      <div className='grid-container'>
        {actual_board}
      </div>
    </main>
    
  )
}

export default App;



