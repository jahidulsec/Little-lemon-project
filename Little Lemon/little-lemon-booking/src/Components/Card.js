


export default function Card ({image, title, price, description}) {

    return (
        <div className="highlight-card">
            <img src={image} width="265px" height="180px" alt={title} />
            <div className="card-content">
                <div className="card-header">
                    <h4 className="card-title">{title}</h4>
                    <h4 className="card-price">{price}</h4>
                </div>
                <p className="card-description">{description}</p>
                <div className="card-footer">
                    <h5 className="card-description">Order a delivery</h5>
                    <img src={require("../Image/bike_icon.png")} alt="bike icon" height="20px" />
                </div>
            </div>
        </div>
    )
}