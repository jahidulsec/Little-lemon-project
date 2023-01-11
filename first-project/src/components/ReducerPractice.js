import { useState,useEffect, useReducer } from 'react';

function reducer(state, action) {
    switch (action.type) {
        case 'add-date': {
            return [...state,
                {date: action.pickDate,
                time: state.time,}
            ];
        }
        case 'add-time': {
            return [...state,
                {date: state.date,
                time: action.pickTime,}
            ]
        }
    }

  throw Error('Unknown action: ' + action.type);
}


const initialState = [
    {date:" 2013-01-10", time:"17:00"}
];

export default function ReducerPractice() {


  const [state, dispatch] = useReducer(reducer, initialState);

  const [time,setTime] = useState("");
  const [date, setDate] = useState("");

  function handleTime (text) {
    dispatch({
        type: 'add-time',
        pickTime: text,
    })
}

    function handleDate (text) {
        dispatch({
            type:"add-date",
            pickDate: text,
        })
    }

  useEffect(()=>{
    console.log(state)
  },[state])

  return (
    <>
      <input
        type="time"
        value={time}
        onChange={(e)=> {setTime(e.target.value)}}
      />

      <input
        value={date}
        type="date"
        onChange={(e)=>{setDate(e.target.value)}}
        />
        <button type='submit' onClick={()=>{handleTime(time)}}>Add Time</button>
        <button type='submit' onClick={()=>{handleDate(date)}}>Add date</button>
        <p>time {time} date {date}</p>
        {state.map((data)=>{
            return (<ul>
                <li>{data.date} and {data.time}</li>
            </ul>)
        })}
    </>
  );
}
