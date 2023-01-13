import React from 'react';

export default function Board(props)
{
    return(
            
         props.value > 0 ?<input type = "text" className='small-box' value={props.value} />:
         <input type = "text" className='small-box' onChange = {props.changeValue}/>
    )
    
}