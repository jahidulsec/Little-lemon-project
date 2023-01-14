import { useReducer, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import BookingForm from './BookingForm'

function reducer(state, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...state, {
                    date: action.pickDate,
                    time: action.pickTime,
                    guest: action.pickGuest,
                    occasion: action.pickOccasion,
                }
            ]
        }
    }
    throw Error('Unknown action' + action.type);
}

const initalState = [
    {date: "2023-01-14", time: "18:00", guest: "5", occasion: "birthday"},
    {date: "2023-01-14", time: "17:00",  guest: "10", occasion: "anniversary"}
];


let currentDate = new Date();
const initialTimes = (date) => { 
    return fetchAPI(date);
}

const updateTimes = (state,action,) => {
    if (action.type === 'updateTimes') {
        let date = new Date(action.updateDate);
        return state = fetchAPI(date)
    }    
}

export default function BookingPage () {

    const [bookingTimes, dispatchBooking] = useReducer(reducer,initalState);
    const [availableTimes,dispatch] = useReducer(updateTimes,initialTimes(currentDate));

    const navigate = useNavigate();

    const submitForm = (date,time,guest,occasion) => {
        if (submitAPI(date,time,guest,occasion)) {
            navigate('/confirmation')
        }
    }

    function updateBookingTable (date, time, guest, occasion) {
        dispatchBooking({
            type: "add",
            pickDate: date,
            pickTime: time,
            pickGuest: guest,
            pickOccasion: occasion,
        });
    }

    function handleDate (date) {
        dispatch({
            type: "updateTimes",
            updateDate: date
        })
    }


    return (
        <div className='booking_section'>
            <BookingForm
                bookingData={bookingTimes}
                availableTimes={availableTimes}
                onAddBooking={updateBookingTable}
                onUpdateTime = {handleDate}
                submitForm={submitForm}
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
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
  };
  const submitAPI = function(formData) {
      return true;
  };