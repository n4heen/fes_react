import React, { useState } from 'react'

export default function Counter() {
    const [arr, setArr] = useState([])

    function addPlus() {
        setArr(prevArr => [...prevArr, "+"])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, "-"])
    }

    return (
        <div>
            <button onClick={addMinus}>-</button >

            <button onClick={addPlus}>+</button>
            {arr}
        </div >

    )
}
