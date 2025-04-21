import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { BookingDetails } from './components/BookingDetails';
import { ConfirmBooking } from './components/ConfirmBooking';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<BookingDetails/>}></Route>
      <Route path='/ConfirmBooking' element={<ConfirmBooking />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
