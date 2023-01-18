import React from 'react';

export default function Board(props)
{
    const [a,setA] = React.useState("");
    const handleChange = event => {
        setA(event.target.value);
        props.changeValue(props.id,event.target.value);
      };

    return(
           
          props.isHeld ===true ?<input type = "number" min={"1"} max={"9"} className='small-box' value={props.val} />:
         <input type = "text" key = {props.id} maxLength={"1"} id = {props.id} className='small-box-fill' value = {a} onChange = {handleChange}/>

    )
    
}