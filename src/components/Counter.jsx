import React, { useState } from 'react'

export default function Counter() {


    const [cart, setCart] = useState({
        item: "apple",
        quantity: 0,
    })

    function addApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: 1
        }))
    }

    return (
        <div>
            <button onClick={() => null}> -</button >
            {cart.item}
            <button onClick={() => null}>+</button>
        </div >

    )
}
