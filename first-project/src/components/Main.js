import { BrowserRouter } from "react-router-dom";
import Card from "./Card";
import RatingCard from "./RatingCard";


function Main (){
    const menuItems = [
        {
            title: "Greek Salad",
            description:
                "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            price:"$12.99",
            getImage: () => require('../Image/greek salad.jpg'),
        },
        {
            title: "Bruchetta",
            description:
                "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil. ",
            price:"$5.99",
            getImage: () =>  require('../Image/Bruchetta.png'),
        },
        {
            title:"Lemon Dessert",
            description:
                "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
            price:"$5.00",
            getImage: () => require('../Image/lemon dessert.jpg'),
        },
    ];


    const ratingCard = [
        {
            name: "Jahidul",
            comment: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            personImage: () => require('../Image/avatar.png'),
        },
        {
            name: "Islam",
            comment: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            personImage: () => require('../Image/avatar.png'),
        },
        {
            name: "Fahim",
            comment: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
            personImage: () => require('../Image/avatar.png'),
        },
    ]

    return (
        <div className="homepage">
            <div className="App-Hero">
                <div className='Hero-content'>
                    <h1 className='Hero-Title'>Little Lemon</h1>
                    <h2 className="Hero-Sub-Tittle">Chicago</h2>
                    <p className="Hero-Description">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <img
                    className='Hero-Image'
                    src={require('../Image/restauranfood.jpg')}
                    width="375px"
                    height="375px"
                    alt="Restaurant food image"
                />
            </div>
            <div className="App-Highlights">
                <div className="App-rows-title">
                    <h2>This weeks Specials!</h2>
                    <button>Online Menu</button>
                </div>
                <div className="cards-items">
                    {menuItems.map((menu) => (
                        <Card
                            key={menu.title}
                            title={menu.title}
                            description={menu.description}
                            price={menu.price}
                            image={menu.getImage()} />
                    ))}
                </div>
            </div>
            <div className="App-Testimonials">
                <h2 className="testimonial-title">Testimonials</h2>
                <div className='rating-cards'>
                    {ratingCard.map((person) => (
                        <RatingCard
                            key={person.name}
                            name={person.name}
                            comment={person.comment}
                            image={person.personImage()}
                        />
                    ))}
                </div>
            </div>
            <div className="App-About">
                <div className="about-content">
                    <h2>Little Lemon</h2>
                    <h3>Chicago</h3>
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.
                    </p>
                </div>
                <img
                    src={require("../Image/restaurant.jpg")}
                    alt="restaurant image"
                    width='375px' />
            </div>
        </div>
    )
}

export default Main;