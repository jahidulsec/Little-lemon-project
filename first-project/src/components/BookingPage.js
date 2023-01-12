import { useReducer } from 'react';
import BookingForm from './BookingForm'

function reducer(state, action) {
    switch (action.type) {
        case 'add': {
            return [
                ...state, {
                    date: action.pickDate,
                    time: action.pickTime,
                }
            ]
        }
    }

    throw Error('Unknown action' + action.type);
}

const initalState = [
    {date: "2023-01-14", time: "18:00"},
    {date: "2023-01-14", time: "17:00"}
];



export default function BookingPage () {

    const [availableTimes, dispatch] = useReducer(reducer,initalState);


    function handleInput (date, time) {
        dispatch({
            type: "add",
            pickDate: date,
            pickTime: time,
        })
    }

    return (
        <div className='booking_section'>
            <BookingForm
                data={availableTimes}
                onAdd={handleInput}
            />
        </div>
    );
}
