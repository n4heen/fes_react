import React from 'react'
import './Todo.css'

export default function Todo(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <button>Delete</button>
        </div>
    )
}
