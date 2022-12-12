import React, { useEffect } from 'react'
import { Axios } from 'axios'

export default function Home() {

    useEffect(() => {
        "https://jsonplaceholder.typicode.com/users"
    }, [])

    return (
        <div>Home</div>
    )
}
