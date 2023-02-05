


export default function RatingCard ({name, image, comment}) {
    return (
        <div className="rating-card">
            <h4 className="card-title">Rating</h4>
            <div className="profile">
                <img src={image} alt={name} />
                <h4 className="card-title">{name}</h4>
            </div>
            <p className="card-description">{comment}</p>
        </div>
    )
}