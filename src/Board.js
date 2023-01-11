import React from 'react';

export default function Board(props)
{
    return(
            <input type = "text" className='small-box' value={props.value}/>
      );
    
}