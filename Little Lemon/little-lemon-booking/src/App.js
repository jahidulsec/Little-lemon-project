import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Main from './Components/Main'
import { Route, Routes } from 'react-router-dom'
import BookingPage from './Components/BookingPage'
import ConfirmationPage from './Components/ConfirmationPage'


export default function App () {
  return (
    <>
      <Header />
        <Routes>
          <Route path='/' element={ <Main /> } ></Route>
          <Route path='/booking' element={<BookingPage />} ></Route>
          <Route path='/confirm' element={<ConfirmationPage />} ></Route>
        </Routes>
      <Footer />
    </>
  )
}