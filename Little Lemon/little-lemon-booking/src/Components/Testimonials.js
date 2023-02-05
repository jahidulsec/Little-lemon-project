import RatingCard from "./RatingCard";


export default function Testimonials () {

    const profile = [
        {
            name:"John Deep",
            image: () => require("../Image/avatar.png"),
            comment: "Great Place!",
        },
        {
            name:"Pick Jay",
            image: () => require("../Image/avatar.png"),
            comment: "Nice dishes!",
        },
        {
            name:"Isak Young",
            image: () => require("../Image/avatar.png"),
            comment: "Great Job!",
        },
        {
            name:"Jan Ho",
            image: () => require("../Image/avatar.png"),
            comment: "I will be coming back again!",
        }
    ]

    return (
        <section className="testimonials col-12">
            <h3 className="section-title">Testimonials</h3>
            <div className="rating-section">
                {profile.map((data) => {
                    return (
                        <RatingCard
                            key={data.name}
                            name={data.name}
                            image={data.image()}
                            comment={data.comment}
                        />
                    )
                })}
            </div>
        </section>
    )
}