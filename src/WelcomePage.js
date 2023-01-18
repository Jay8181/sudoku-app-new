import './App.css';
import React from 'react';
import background from "./welcomeImage.jpg";

export default function WelcomePage(props) {  
    
    const myStyle={
        backgroundImage: `url(${background})`,
        height:'101vh',
        marginTop:'-70px',
        fontSize:'50px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        
    };
    function handleClick(event)
    {
        const {name} = event.target;
        if(name === 'Easy')
        {
            props.changeDifficulty(15);

        }
        else if(name === 'Medium')
        {
          props.changeDifficulty(30);
        }
        else if(name === 'Hard')
        {
           props.changeDifficulty(45);
        }

    }
    return(
    <div style={myStyle}>
        <h2 className='sudoku-title'>SUDOKU</h2>
        <div className='buttons-level'>
        <button className='button-level' onClick={handleClick} name='Easy'>Easy</button>
        <button className='button-level'onClick={handleClick} name='Medium'>Medium</button>
        <button className='button-level'onClick={handleClick} name='Hard'>Hard</button>
        </div>
        
    </div>
    );
 }