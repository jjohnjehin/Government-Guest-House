// BookingContext.js
import React, { createContext, useState } from "react";
import dayjs from "dayjs";

export const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const [checkindate, setCheckindate] = useState(dayjs().add(1, 'day').format('DD MMMM YYYY'));
  const [selectedoutdate, setSelectedoutdate] = useState(dayjs());
  const [checkoutdate, setCheckoutdate] = useState(dayjs().add(2, 'day').format('DD MMMM YYYY'));
  const [opencheckin, setOpencheckin] = useState(false);
  const [opencheckout, setOpencheckout] = useState(false);
  const [open, setOpen] = useState(false);
  const [guest, setGuest] = useState(1);
  const [room, setRoom] = useState(1);

  return (
    <BookingContext.Provider
      value={{
        selectedDate, setSelectedDate,
        checkindate, setCheckindate,
        selectedoutdate, setSelectedoutdate,
        checkoutdate, setCheckoutdate,
        opencheckin, setOpencheckin,
        opencheckout, setOpencheckout,
        open, setOpen,
        guest, setGuest,
        room, setRoom
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};
