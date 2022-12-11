import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0)

    return (
        <div>
            {count}

            <button onClick={() => setCount((prev) => prev + 1)}>+</button>
            <button onClick={() => setCount((prev) => prev - 1)}>-</button>
        </div>

    )
}
