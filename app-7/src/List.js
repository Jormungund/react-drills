import React from 'react';
import ToDo from './Todo';

export default function Lists(props){
    let list = props.toDoStuff.map((element,i)=><ToDo key={i} toDo={element}/>)
    return(
        <div>
            {list}
        </div>
    )
}