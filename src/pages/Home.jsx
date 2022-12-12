import React, { useEffect, useState } from 'react'
import axios from 'axios'
import User from '../components/User'

export default function Home() {

    const [users, setUsers] = useState([])
    async function fetchUser() {
        const { data } = await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {

        setTimeout(() => {
            fetchUser()
        }, 500)
        fetchUser()
    }, [])

    return (
        <div>
            {
                users.map((user) => {
                    return <User
                        key={user.id}
                        id={user.id}
                        name={user.name}
                        email={user.email}
                        username={user.username}
                    />
                })
            }
        </div>
    )
}
