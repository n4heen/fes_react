import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Home() {

    const [users, setUsers] = useState([])
    async function fetchUser() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {


        fetchUser()
    }, [])

    return (
        <div>{users.length > 0 && users.name}</div>
    )
}
