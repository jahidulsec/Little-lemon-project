


export default function About () {
    return (
        <section className="about col-12" id='about-section'>
            <div className="about-content">
                <h1 className="title">Little Lemon</h1>
                <h2 className="sub-title">Chicago</h2>
                <p className="description">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.<br />
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. 
                </p>
            </div>
            <div className="about-img">
                <img className="about-img1" src={require("../Image/Mario and Adrian A.jpg")} width="272 px" alt="owner image" />
                <img className="about-img2"src={require("../Image/restaurant.jpg")} width="272 px" alt="restaurant image" />
            </div>
        </section>
    )
}