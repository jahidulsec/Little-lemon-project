import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import { Route, Routes } from 'react-router-dom';
import BookingPage from './components/BookingPage';
import ConfirmBooking from './components/ConfirmBooking';




function App () {

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />}></Route>
        <Route path='/booking_page' element={<BookingPage />}></Route>
        <Route path='/confirmation' element={<ConfirmBooking />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
