import React from 'react'

export default function Todo(props) {
    return (
        <div>
            <h2>{props.header}</h2>
            <button>Delete</button>
        </div>
    )
}
