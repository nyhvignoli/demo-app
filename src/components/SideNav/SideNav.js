import './SideNav.css';

const SideNav = (props) => {
    const renderLinks = () => {
        return props.cards.map((card) => {
            return (
                <a key={card.id} className={`${props.active === card.id ? "Link-active" : null }`} href='#' onClick={() => props.onClick(card.id)}>{card.title}</a>
            )
        })
    }

    return (
        <nav>
            <ul  className='Nav'>
               {renderLinks()}
            </ul>
        </nav>
    )
}

export default SideNav