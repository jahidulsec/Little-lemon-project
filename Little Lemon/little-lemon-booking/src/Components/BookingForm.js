import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { RadioGroup, RadioOption } from "../Radio/Radio";


const currentDate = new Date ();

export default function BookingForm ({data, onDate, onBooking, booking}) {

    const [selected,setSelected] = useState("")
    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [size, setSize] = useState("");
    const [occasion, setOccasion] = useState("");

    const navigator = useNavigate();

  
    useEffect(() => {
        onDate(date)
        onBooking((d) => {
            return {
                ...d,
                date: date,
                time: time,
                size: size,
                occasion: occasion,
                place: selected
            }
        })
        console.log(booking)
    }, [date, time, size, occasion, selected])

    const handleSubmit = (e) => {
        e.preventDefault();
    }
        


    return (
            <section className="booking">
                <form className="booking_form" onSubmit={handleSubmit}>
                    <h1 className="sub-title col-12 primary-yel"> Reservations</h1>
                    <div className="form-fieldset col-12">
                        <RadioGroup onChange={setSelected} selected={selected}>
                            <RadioOption value="indoor">Indoor Seating</RadioOption>
                            <RadioOption value="outdoor">Outdoor Seating</RadioOption>
                        </RadioGroup>
                        <div className="field date">
                            <label htmlFor="date">Date</label>
                            <input 
                                type="date"
                                id="date"
                                placeholder="Date"
                                value={date}
                                min={currentDate}
                                onChange={(e) => {setDate(e.target.value)}}/>
                        </div>
                        <div className="field size">
                            <label htmlFor="size">Number of diners</label>
                            <select id="size" value={size} onChange = {(e) => {setSize(e.target.value)}}>
                                <option selected hidden>No. of Diners</option>
                                <option value="1">1 Diner</option>
                                <option value="2">2 Diners</option>
                                <option value="4">4 Diners</option>
                                <option value="6">6 Diners</option>
                                <option value="8">8 Diners</option>
                            </select>
                        </div>
                        <div className="field occasion">
                            <label htmlFor="occasion">Occasion</label>
                            <select id="occasion" value={occasion} onChange={(e) => {setOccasion(e.target.value)}}>
                                <option selected hidden>
                                    Occasion
                                </option>
                                <option value="birthday">Birthday</option>
                                <option value="anniversary">Anniversary</option>
                            </select>
                        </div>
                        <div className="field time">
                            <label htmlFor="time">Time</label>
                            <select id="time" value={time} onChange={(e) => {setTime(e.target.value)}}>
                                <option selected hidden>Time</option>
                                {data.map((time) => {
                                    return <option key={time} value={time}>{time}</option>
                                })}
                            </select>
                        </div>
                    </div>
                    <div className="img-btn"> 
                        <div className="img-section ">
                            <img src={require('../Image/lemon dessert.jpg')} alt="owner_image" width="200px"/>
                            <img src={require('../Image/Mario and Adrian b.jpg')} alt="owner_image" width="200px"/>
                            <img src={require('../Image/Bruchetta.png')} alt="owner_image" width="200px"/>
                        </div>
                        <button className="btn" type="submit" onClick={() => {navigator('/confirm', {state: booking})}}>
                            Reserve a Table
                        </button>
                    </div>
                </form>            
            </section>  
    )
}

