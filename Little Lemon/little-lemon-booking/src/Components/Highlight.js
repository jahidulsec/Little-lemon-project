import Card from "./Card"

export default function Highlights () {
    
    const items = [
        {
            image: () => require("../Image/greek salad.jpg"),
            title: "Greek Salad",
            price: "$ 12.99",
            description:"The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
        },
        {
            image: () => require("../Image/Bruchetta.png"),
            title: "Bruchetta",
            price: "$ 5.99",
            description:"Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        },
        {
            image: () => require("../Image/lemon dessert.jpg"),
            title: "Lemon Dessert",
            price: "$ 5.00",
            description:"This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
        }
    ]
    
    return (
        <section className="highlights col-12">
            <div className="highlights-section-header">
                <h3 className="title">This weekend specials!</h3>
                <button className="btn">Order Online</button>
            </div>
            <div className="card-section">
                {items.map((data) => {
                    return(
                        <Card 
                            key={data.title}
                            image={data.image()}
                            title={data.title}
                            price={data.price}
                            description={data.description}
                        />
                    )
                })}
            </div>         
        </section>
    )
}