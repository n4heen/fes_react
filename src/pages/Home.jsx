import React, { useEffect } from 'react'
import axios from 'axios'

export default function Home() {


    async function fetchUser() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        console.log(data)
    }

    useEffect(() => {


        fetchUser()
    }, [])

    return (
        <div>Home</div>
    )
}
