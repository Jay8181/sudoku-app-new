import React from 'react';

export default function Board(props)
{
    const [a,setA] = React.useState("");
    const handleChange = event => {
        console.log(event.target.value);
        setA(event.target.value);
        props.changeValue(props.id,event.target.value);
      };

    return(
           
          props.isHeld ===true ?<input type = "text" className='small-box' value={props.val} />:
         <input type = "text" key = {props.id} id = {props.id} className='small-box-fill' value = {a} onChange = {handleChange}/>
    )
    
}