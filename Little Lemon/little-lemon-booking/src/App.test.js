import { render, screen } from "@testing-library/react";
import BookingForm from "./Components/BookingForm";
import BookingPage from './Components/BookingPage'


// const availableTimes = [
//   '17:00',
//   '21:00',
//   '22:00',
// ]

// const handleDate = jest.fn()
// const setBooking = jest.fn()
// const booking = {
//   date: "2023-02-10",
//   time: "17:00",
//   size: '2',
//   occasion: "birthday",
//   place: "indoor"
// }

// test('Rendering the booking form heading', () => {
  
//   render(<BookingForm data={availableTimes}
//               onDate={handleDate}
//               onBooking={setBooking}
//               booking={booking}
//             />)
//     const headerElement =  screen.getByText("Reservations")
//     expect(headerElement).toBeInTheDocument()
// })

test('function', () => {
  const add = jest.fn()
  add.mockImplementation((a,b) => a+b)
  expect(add(1,2)).toBe(3)
})

test('import function', () => {
  const initialzeTimes = require('./Components/function')
  expect(initialzeTimes().length).toBe(7)
})