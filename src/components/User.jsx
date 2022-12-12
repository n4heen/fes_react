import React from 'react'

export default function User(props) {
    return (
        <div >
            <div>{props.id}</div>
            <div>{props.name}</div>
            <div>{props.email}</div>
            <div>{props.username}</div>
        </div>
    )
}
