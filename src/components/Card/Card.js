import { useState } from 'react';
import './Card.css';

const Card = (props) => {
    const [counter, setCounter] = useState(0)


    return (
        <div 
            className={`Container ${props.active ? "Active" : ""}`} 
            onClick={() => props.onClick(props.id)}
        >
            <img src="https://picsum.photos/100"/>
            <h2>{props.title}</h2>
            <div>{props.description}</div>
            <div className='Buttons-Group'>
                <button disabled={counter <= 0} onClick={() => setCounter(counter - 1)}>-</button>
                <span>{counter}</span>
                <button  onClick={() => setCounter(counter + 1)}>+</button>
            </div>
        </div>
    )
}

export default Card