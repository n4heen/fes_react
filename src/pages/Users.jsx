import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function Users() {

    const { id, name, email, username } = useParams()
    const [users, setUsers] = useState({})
    async function fetchUser() {
        const { data } = await axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        setUsers(data)
        console.log(data)
    }

    useEffect(() => {


        fetchUser()
    }, [])


    return (
        //         <div>
        //         <div>{id}</div>
        //         <div>{users?.name}</div>
        //         <div>{email}</div>
        //         <div>{username}</div>
        //         </div>



        <div>

            {users.id}
            {users.name}
            {users.email}
            {users.username}



        </div>
    )
}
