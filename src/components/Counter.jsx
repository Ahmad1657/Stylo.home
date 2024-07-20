import React, { useState } from 'react'
import { toast } from 'react-toastify'


const Counter = () => {
    const [counter, setcounter] = useState(1)
    const minus = () => {
        if (counter > 1) {
            setcounter(counter - 1);
        }
        else {
            toast.warning("You cannot order less than 1")
        }
    }
    const add = () => {
        if (counter < 3) {
            setcounter(counter + 1);
        }
        else {
            toast.warning("You cannot order more than 3")
        }

    }
    return (
        <>

        <div className="btn-group" style={{ backgroundColor: '#e6007e'}}>

        <button
            className='btn' 
            style={{color: '#ffffff', fontSize: '1.5rem'}}>
                Add to Cart
            </button>

            <button
                className="btn"
                onClick={minus}
                style={{ color: '#ffffff', fontSize: '1.5rem' }}
            >
                -
            </button>
            <div
                className="m-2"
                style={{ color: '#ffffff', fontSize: '1.5rem'}}
            >
                {counter}
            </div>
            <button
                className="btn"
                onClick={add}
                style={{ color: '#ffffff', fontSize: '1.5rem' }}
            >
                +
            </button>
           
        </div>
        </>
    )
}

export default Counter;
