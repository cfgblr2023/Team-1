import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./styles.css";

export function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);

  const availableDates = [
    new Date("2023-07-01"),
    new Date("2023-07-02"),
    new Date("2023-07-03"),
    new Date("2023-07-04"),
    new Date("2023-07-05"),
  ];

  

  const isAvailable = (date) => {
    return availableDates.some(
      (availableDate) =>
        availableDate.getDate() === date.getDate() &&
        availableDate.getMonth() === date.getMonth() &&
        availableDate.getFullYear() === date.getFullYear()
    );
  };

  const getClassName = (date) => {
    if (isAvailable(date)) {
      return "available";
    } else {
      return "busy";
    }
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        isClearable
        showYearDropdown
        scrollableMonthYearDropdown
        renderDayContents={(day, date) => {
          return (
            <div className={getClassName(date)}>
              {day}
            </div>
          );
        }}
      />
    </div>
  );
}


