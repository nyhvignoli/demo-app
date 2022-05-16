import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [counter, setCounter] = useState(0)

    return (
        <div 
            className={`Container ${props.active ? "Active" : ""}`} 
            onClick={() => props.onClick(props.id)}
        >
            <img src="https://picsum.photos/80"/>
            <h3>{props.title}</h3>
            <div>{props.description}</div>
            <div className='Buttons-group'>
                <button disabled={counter <= 0} onClick={() => setCounter(counter - 1)}>-</button>
                <span>{counter}</span>
                <button  onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    )
}

export default Card