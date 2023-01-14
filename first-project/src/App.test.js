import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';
import BookingPage from './components/BookingPage';

const availableTimes = [
  {date: "", time: ""},
];

const updateTimes = jest.fn();


test('Renders the booking form heading!', () => {
  render(<BookingForm data={availableTimes}  onAdd={updateTimes}/>)
  const headingElement = screen.getByText(/Booking Table/);
  expect(headingElement).toBeInTheDocument();
})

test('Validate the update function!', () => {
  render (<BookingPage />);
  
  updateTimes("2023-01-22", "22:00");
  
  expect(updateTimes).toBeCalled();
})
