import React from 'react';

export default function Board(props)
{
    
    return(
           
          props.val  ?<input type = "text" className='small-box' defaultValue={props.val} />:
         <input type = "text" key = {props.id} id = {props.id} className='small-box' value = {props.val} onChange = {(event)=>{props.changeValue(event)}}/>
    )
    
}