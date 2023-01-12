import { fireEvent, render, screen } from '@testing-library/react';
import BookingForm from './components/BookingForm';

describe("Booking Form", () => {
  test('Submit is disabled when no date and time is picked!', () => {
    const availableTimes = [
      {date: "2023-01-14", time: "18:00"},
      {date: "2023-01-14", time: "17:00"}
  ];
    const handleInput = jest.fn();

    render(<BookingForm data={availableTimes} onAdd={handleInput}/>);

    const handleSubmit = jest.fn();

    const dateInput = screen.getByLabelText(/Choose date/);
    fireEvent.change(dateInput, {target : {value : '2023-01-14'}});

    const timeInput = screen.getByLabelText(/Choose time/);
    fireEvent.change(timeInput, { target: { value: ""}});

    const submitButton = screen.getByRole("button");
    fireEvent.click(submitButton);

    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("disabled")
   })

   test("Form is successfully submitted!", () => {
    const availableTimes = [
      {date: "2023-01-14", time: "18:00"},
      {date: "2023-01-14", time: "17:00"}
  ];
  const handleInput = jest.fn();

  render(<BookingForm data={availableTimes} onAdd={handleInput} />)


  const option = screen.getByText(/17:00/)
  fireEvent.click(option);



  const handleSubmit = jest.fn();
  const submitButton = screen.getByRole("button");

  fireEvent.click(submitButton);

  expect(handleSubmit).toHaveBeenCalled();

   })
})