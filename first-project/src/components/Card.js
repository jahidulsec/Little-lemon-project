

function Card ({title, description, price, image}) {
    return (
        <div className="card">
            <img className="card-image" src={image} width='265px' height='185px' alt={title} />
            <div className='card-content'>
                <div className="card-title-price">
                    <h3 className='card-title'>{title}</h3>
                    <h3 className="card-price">{price}</h3>
                </div>
                <p className='card-description'>{description}</p>
                <div  className="card-order">
                     <p className='card-order-description'>Order Online</p>
                    <img src={require('../Image/bike_icon.png')} height="20px" alt='bike logo' />
                 </div>
            </div>
        </div>
    )
}

export default Card;