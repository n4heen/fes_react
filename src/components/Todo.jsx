import React from 'react'
import './Todo.css'

export default function Todo(props) {



    return (
        <div className='todo'>
            <h2>{props.title}</h2>
            <p>{props.para}</p>
            <button onClick={()=>props.setToggleModal(true)}>Delete</button>
        </div>
    )
}
