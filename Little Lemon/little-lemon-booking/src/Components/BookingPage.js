import { useReducer, useState } from 'react';
import BookingForm from './BookingForm'



const currentDate = new Date ()
const initialzeTimes = (date) => {
    const availableTimes = fetchAPI(date)
    return availableTimes
}

function updateTimes(state, action) {
    switch (action.type) {
        case 'add': {
            return fetchAPI(action.pickDate)
        }
    }
    throw Error('Unknown action' + action.type);
}






export default function BookingPage () {
    const [booking, setBooking] = useState ({
        date: "",
        time: "",
        size: '',
        occasion: "",
        place: ""
    })

    const [availableTimes, dispatch] = useReducer(updateTimes,initialzeTimes(currentDate));

    function handleDate (date) {
        dispatch({
            type: 'add',
            pickDate: new Date(date)
        })
    }


    return (
        <div className='booking_section'>
            <BookingForm 
                data={availableTimes}
                onDate={handleDate}
                onBooking={setBooking}
                booking={booking}
                submitAPI={submitAPI}
            />
        </div>
    );
}






const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push((i-12) + ':00 pm');
        }
        if(random() < 0.5) {
            result.push((i-12) + ':30 pm');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const add = (a,b) => {
    return a+b;
}