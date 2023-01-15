
import './App.css';
import { nanoid } from 'nanoid';
import Board from './Board';
import newStartingBoard from './sudoku-generator';
import React from 'react';
import Confetti from 'react-confetti';
export default function Playground(props) {  

  const [mother_board,setMotherBoard] = React.useState(newStartingBoard(props.difficulty));
  const [solvedBoard,setSolvedBoard] = React.useState(mother_board[2]);

  const[puzzle_values,setPuzzleValue] = React.useState(allNewBoxes(mother_board[1]));
  const [solved,setSolved] = React.useState(false);
  function allNewBoxes(temp) {
    const pz_v = temp;
    console.log("Solved Board",solvedBoard);
    console.log("Unsolved Board",pz_v);
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


console.log(puzzle_values);

React.useEffect(()=>{
  let flag  =true;
  let count = 0;
  for(let i = 0;i<9;i++)
  {
    for(let j = 0;j<9;j++)
    {
    if(puzzle_values[count].val !== solvedBoard[i][j])
        {
          flag = false;
          break;
        }
        count++;
    }
    
  }
  if(flag)
  {
    setSolved((prevState)=>{
     return(!prevState);
    })
  }
  console.log(flag);
  console.log(count);
}
,[puzzle_values])
  return(
    <div className = 'super-container'>
  <main className='main'>
    {solved && <Confetti/>}
  <div className='grid-container'>
    {mainBoard}
    
  </div>
</main>
</div>
)

}




