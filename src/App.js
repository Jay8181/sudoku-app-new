
import './App.css';
import { nanoid } from 'nanoid';
import Board from './Board';
import newStartingBoard from './sudoku-generator';
import React from 'react';


function App() {  
  const[puzzle_values,setPuzzleValue] = React.useState(allNewBoxes());
  function allNewBoxes() {
    const pz_v = (newStartingBoard(10)[1])
    let newBoard = []
    for(let i = 0;i<9;i++)
    {
      for(let j = 0;j<9;j++)
      {
        newBoard.push(generateObject(pz_v[i][j]));
      }
    }
    return(newBoard)
}

function generateObject(val)
{
  return({
    id:nanoid(),
    isHeld:val===0 ?false:true,
    val:val===0?undefined:val ,
    
  })
}

 function changeValue(id,value)
 {
  console.log("JAY");
    // const{id,value} = event.target;
    //console.log(event.target.id)
    console.log(value);
    // setPuzzleValue((prevState)=>prevState.map((item)=>{
    //    return(item.id === id? {...item,val:}:item);
    // }))
    setPuzzleValue((prevState)=>{
      console.log("JAY")
      const a =[]
      for(let i = 0;i<81;i++)
      {
        if(prevState[i].id === id)
           a.push({id:id,isHeld:false,val:Number(value)});
        else 
           a.push(prevState[i])
      }
      console.log(a);
      return(a);
    })
 }


  function createBoardComponent()
  {
     const BoardComponent = puzzle_values.map(item =>
     <Board key = {item.id} id={item.id} isHeld={item.isHeld} val = {item.val} changeValue = {changeValue}/>)
     return BoardComponent;
  }
const [mainBoard,changeMainBoard] = React.useState(createBoardComponent())
React.useEffect(()=>{console.log(puzzle_values)},[puzzle_values])
  return(<main className='main'>
  <div className='grid-container'>
    {mainBoard}
  </div>
</main>)

}

export default App;



