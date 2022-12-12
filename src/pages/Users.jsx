import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function Users() {

    const { username } = useParams()

    useEffect(()=>{

    },[])

    return (
        <div>Users</div>
    )
}
