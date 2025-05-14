import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { BookingDetails } from "./components/UserPage/BookingDetails"
import { ConfirmBooking } from "./components/UserPage/ConfirmBooking"
import {Footer} from "./components/Footer"
import { AdminHome } from './components/AdminPage/AdminHome';
import { Header } from './components/UserPage/Header';
import { Home } from './components/UserPage/Home';
import { AvailabilityChart } from './components/AdminPage/AvailabilityChart';
import { BookingProvider } from './components/UserPage/BookingContext';
import { Gallary } from './components/UserPage/Gallary';
import { Location } from './components/UserPage/Location';
import {Update} from "./components/AdminPage/Update"
import {Assignroom} from "./components/AdminPage/Assignroom"
import { SearchBooking } from './components/AdminPage/SearchBooking';

function App() {
  return (
    // <BrowserRouter>
    // {/* <Header/> */}
    // {/* <Header /> */}
    // <Routes>
    //   {/* <Route path="/" element={<Header/>}></Route> */}
    //   {/* <Route path='/' element={<BookingDetails/>}></Route> */}
    //   {/* <Route path='/ConfirmBooking' element={<ConfirmBooking />}></Route> */}
    //   {/* <Route path='/' element={<Home/>}></Route> */}
    //   {/* <Route element={<Footer/>}></Route> */}
    //   <Route path='/' element={<Home/>}/>
    //   <Route path='/bookingdetails' element={<BookingDetails/>}/>
    //   <Route path='/confirmbooking' element={<ConfirmBooking/>}/>
    //   <Route path='/AvailabilityChart' element={<AvailabilityChart/>}></Route>
    // </Routes>
    // </BrowserRouter>
    <BookingProvider>
      <BrowserRouter>
      <Routes>
        {/* USERPAGE */}
        {/* <Route path="/Header" element={<Header/>}></Route>
        <Route path='/' element={<Home/>}/>
        <Route path='/BookingDetails' element={<BookingDetails/>}/>
        <Route path='/confirmbooking' element={<ConfirmBooking/>}/>
        <Route path='/Gallary' element={<Gallary/>}></Route>
        <Route path='/Location' element={<Location/>}></Route>  */}
        {/* ADMIN PAGE */}
        
        <Route path='/' element={<AdminHome/>}></Route>
        <Route path='/Update' element={<Update/>}></Route>
        <Route path='/Assignroom' element={<Assignroom/>}></Route>
        <Route path='/AvailabilityChart' element={<AvailabilityChart/>}></Route>
        <Route path='/SearchBooking' element={<SearchBooking/>}></Route>
      </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;
