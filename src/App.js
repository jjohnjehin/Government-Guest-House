import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { BookingDetails } from "./components/UserPage/BookingDetails";
import { ConfirmBooking } from "./components/UserPage/ConfirmBooking";
import { Footer } from "./components/Footer";
import { AdminHome } from './components/AdminPage/AdminHome';
import { Header } from './components/UserPage/Header';
import { Home } from './components/UserPage/Home';
import { AvailabilityChart } from './components/AdminPage/AvailabilityChart';
import { BookingProvider } from './components/UserPage/BookingContext';
import { Gallary } from './components/UserPage/Gallary';
import { Location } from './components/UserPage/Location';
import { Update } from "./components/AdminPage/Update";
import { Assignroom } from "./components/AdminPage/Assignroom";
import { SearchBooking } from './components/AdminPage/SearchBooking';

function App() {
  return (
    <BookingProvider>
      <BrowserRouter>
        <Routes>
          {/* USER PAGE */}
          {/* <Route path="/" element={
            <>
              <Header />
              <Home />
              <Footer />
            </>
          } />
          <Route path="/bookingdetails" element={<BookingDetails />} />
          <Route path="/confirmbooking" element={<ConfirmBooking />} />
          <Route path="/gallary" element={<Gallary />} />
          <Route path="/location" element={<Location />} /> */}

          {/* ADMIN PAGE */}
          <Route path="/" element={<AdminHome />} />
          <Route path="/update" element={<Update />} />
          <Route path="/assignroom" element={<Assignroom />} />
          <Route path="/availabilitychart" element={<AvailabilityChart />} />
          <Route path="/searchbooking" element={<SearchBooking />} />
        </Routes>
      </BrowserRouter>
    </BookingProvider>
  );
}

export default App;


