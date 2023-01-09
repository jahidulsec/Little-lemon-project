


function RatingCard ({name, image, comment}) {
    return (
        <div className="rating-card">
            <h3>Rating</h3>
            <div className="card-profile">
                <h3>{name}</h3>
                <img src={image} width="80px" height="80px" alt={name} />
            </div>
            <p>{comment}</p>
        </div>
    )
}

export default RatingCard;