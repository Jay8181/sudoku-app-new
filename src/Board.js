import React from 'react';

export default function Board(props)
{
    return(
            
            props.value !== 0 ?<div><input type = "text" className='small-box' value={props.value}/> </div>: <div onChange={props.handleChange}><input type = "text" className='small-box' /></div> 
      );
    
}