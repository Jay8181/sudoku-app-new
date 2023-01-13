
import './App.css';
import { nanoid } from 'nanoid';
import Board from './Board';
import newStartingBoard from './sudoku-generator';
import React from 'react';


function App() {


  const pz_v = (newStartingBoard(10)[1])
  const[puzzle_values,setPuzzleValue] = React.useState(allNewBoxes());
  function allNewBoxes() {
    let newBoard = []
    for(let i = 0;i<9;i++)
    {
      for(let j = 0;j<9;j++)
      {
        newBoard.push(generateObject(pz_v[i][j]));
      }
    }
    console.log(newBoard);
    return(newBoard)
}

function generateObject(value)
{
  return({
    id:nanoid(),
    isHeld:false,
    value:value
  })
}

 function changeValue(id)
 {
    setPuzzleValue((prevState)=>prevState.map((item)=>{
           return(item.id === id ? {...item,value:5}:item)
    }))
 }


  function createBoardComponent()
  {
     const BoardComponent = puzzle_values.map(item =>
     <Board key = {item.id} id={item.id} isHeld={item.isHeld} value = {item.value} changeValue = {()=>{changeValue(item.id)}}/>)
     return BoardComponent;
  }
  const [mainBoard,setMainBoard] = React.useState(createBoardComponent());

  return(<main className='main'>
  <div className='grid-container'>
    {mainBoard}
  </div>
</main>)

}

export default App;



