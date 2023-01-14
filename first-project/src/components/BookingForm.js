import { useEffect, useState } from "react";
import Option from "./Option";


let currentDate = new Date().toJSON().slice(0, 10);


export default function BookingForm ({ bookingData,availableTimes,onAddBooking, onUpdateTime }) {


    const [date, setDate] = useState(currentDate);
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("1");
    const [occasion, setOccasion] = useState("birthday");

    //let convertedDate = new Date(date);

    
    useEffect(() => {
        console.log(bookingData)
        console.log(availableTimes)
        console.log("")
    }, [date])

    
    const getValid = () => {
        return time;
    }

    const clearForm = () => {
        setDate(currentDate);
        setGuest("1");
        setTime("");
        setOccasion("birthday");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Thanks for your booking!");
        clearForm();
    }

    


    return (
            <form className="booking-form section-pad" onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Booking Table</h2>
                    <div className="Field">
                        <label htmlFor="date">Choose date <sup className="error-msg">*</sup></label>
                        <input
                            id="date"
                            type="date"
                            value={date}
                            min={currentDate}
                            onChange={(e)=> {setDate(e.target.value)}}
                         />
                    </div>
                    <div className="Field">
                        <label htmlFor="time">Choose time <sup className="error-msg">*</sup></label>
                        <select
                            id="time" value={time} onChange={ (e) => {setTime(e.target.value)}}>
                            <option value="">Pick a time</option>
                            <Option time={availableTimes} />
                        </select>
                    </div>
                    <div className="Field">
                        <label htmlFor="guest">Number of guests</label>
                        <input
                            id='guest'
                            type='number'
                            min='1'
                            max='10'
                            placeholder="1"
                            value={guest}
                            onChange={(e)=>{setGuest(e.target.value)}} />
                    </div>
                    <div className="Field">
                        <label htmlFor="occasion">Choose occasion</label>
                        <select
                            id="occasion"
                            value={occasion}
                            onChange={ (e) => {
                                setOccasion(e.target.value);
                                onUpdateTime(e.target.value);
                        }}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        disabled = {!getValid()}
                        onClick = {() => {onAddBooking(date, time, guest, occasion)}}
                        >
                            Make your reservation
                        </button>
                </fieldset>
            </form>
    )
}
