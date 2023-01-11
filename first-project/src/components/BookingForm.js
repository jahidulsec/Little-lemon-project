import { useEffect, useState } from "react";


let currentDate = new Date().toJSON().slice(0, 10);



export default function BookingForm ({data, onAdd}) {


    const [date, setDate] = useState("");
    const [time, setTime] = useState("");
    const [guest, setGuest] = useState("1");
    const [occasion, setOccasion] = useState("birthday");

    let available = data
        .filter((t)=> t.date === date)
        .map((t)=> t.time)

    useEffect(() => {
        console.log(available);
        console.log(available.time)
        console.log(date)
        console.log(available.filter((a) => a === "17:00")[0] )
    }, [date])


    const getValid = () => {
        return (
            time &&
            date
        )
    }

    const clearForm = () => {
        setDate("");
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
                            {available.filter((a) => a === "17:00")[0] ==="17:00" ? null : <option value="17:00">17:00</option>}
                            {available.filter((a) => a === "18:00")[0] ==="18:00" ? null : <option value="18:00">18:00</option>}
                            {available.filter((a) => a === "19:00")[0] ==="19:00" ? null : <option value="19:00">19:00</option>}
                            {available.filter((a) => a === "20:00")[0] ==="20:00" ? null : <option value="20:00">20:00</option>}
                            {available.filter((a) => a === "21:00")[0] ==="21:00" ? null : <option value="21:00">21:00</option>}
                            {available.filter((a) => a === "22:00")[0] ==="22:00" ? null : <option value="22:00">22:00</option>}
                        </select>
                        {available.length === 6 ? <h6 className="error-msg">No slot available</h6> : null}
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
                        <label htmlFor="occasion">Choose time</label>
                        <select id="occasion" value={occasion} onChange={ (e) => {setOccasion(e.target.value)}}>
                            <option value="birthday">Birthday</option>
                            <option value="anniversary">Anniversary</option>
                        </select>
                    </div>
                    <button
                        type="submit"
                        disabled = {!getValid()}
                        onClick = {()=>{onAdd(date, time)}}
                        >
                            Make your reservation
                        </button>
                </fieldset>
            </form>

    )
}

