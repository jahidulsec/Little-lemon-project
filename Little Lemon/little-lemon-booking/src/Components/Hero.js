


export default function Hero () {
    return (
        <section className="hero col-12">
            <div className="hero-content">
                <h1 className='title'>Little Lemon</h1>
                <h2 className='sub-title'>Chicago</h2>
                <p className='description'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <button className='btn'>Reserve a table</button>
            </div> 
            <img src={require('../Image/restauranfood.jpg')} width="250px" alt="restaurant food"/>
        </section>
    )
}