import './Card.css'

const Card = ({ title, description, active, onClick, id }) => {
    return (
        <div 
            className={`Container ${active ? 'Active' : null}`}
            onClick={() => onClick(id)}
        >
            <img src="https://picsum.photos/80" />
            <h3>{title}</h3>
            <div>{description}</div>
        </div>
    )
}

export default Card