import React, { useState } from 'react'

const CounterApp = () => {
    let num = 0;
    const [currentNum, setNum] = useState(num)
    const addplz = () => {
        setNum(currentNum + 1)

    }
    const minusplz = () => {
        if (currentNum <= 0) {
           
            currentNum = 0
        }
        setNum(currentNum - 1)
    }
    const resetplz = () => {
        setNum(currentNum == "counter is reset now")
    }
    return (
        <div>
            
            <button onClick={addplz}><h4>Add</h4></button>
            <h2>{currentNum}</h2>
            <button onClick={minusplz}><h4>Subtract</h4></button><hr />
            <button onClick={resetplz}>Reset this </button>
        </div>
    )
}

export default CounterApp
