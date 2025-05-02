import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { BookingDetails } from "./components/UserPage/BookingDetails"
import { ConfirmBooking } from "./components/UserPage/ConfirmBooking"
import {Footer} from "./components/Footer"
import { Home } from './components/AdminPage/Home';

function App() {
  return (
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      {/* <Route path="/" element={<Header/>}></Route> */}
      {/* <Route path='/' element={<BookingDetails/>}></Route> */}
      {/* <Route path='/ConfirmBooking' element={<ConfirmBooking />}></Route> */}
      <Route path='/' element={<Home/>}></Route>
      {/* <Route element={<Footer/>}></Route> */}
    </Routes>
    </BrowserRouter>
  );
}

export default App;
