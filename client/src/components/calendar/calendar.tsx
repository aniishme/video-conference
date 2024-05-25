import React, { useState } from "react";
import { Button } from "../ui/button";
import { GetEventType } from "@/types";

interface CalendarProps {
  events: GetEventType[];
}

const Calendar: React.FC<CalendarProps> = ({ events }) => {
  const today = new Date();
  const [currentMonth, setCurrentMonth] = useState(today.getMonth());
  const [currentYear, setCurrentYear] = useState(today.getFullYear());

  const changeMonth = (direction: number) => {
    let newMonth = currentMonth + direction;
    let newYear = currentYear;

    if (newMonth < 0) {
      newMonth = 11;
      newYear -= 1;
    } else if (newMonth > 11) {
      newMonth = 0;
      newYear += 1;
    }

    setCurrentMonth(newMonth);
    setCurrentYear(newYear);
  };

  const renderCalendar = () => {
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const firstDayIndex = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();

    const calendarDays: JSX.Element[] = [];

    for (let i = 0; i < firstDayIndex; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="w-1/7 h-24"></div>);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(currentYear, currentMonth, day);
      const dateString = currentDate.toDateString();
      const isPastEvent = currentDate < today;

      const eventByDay = events.filter(
        (event) => new Date(event.date).toDateString() === dateString
      );

      const eventExists = eventByDay.length > 0;

      const eventClass = eventExists
        ? isPastEvent
          ? "bg-[#FF6B6B]"
          : "bg-[#4ECDC4]"
        : "bg-[#131B23]";
      const todayClass =
        currentDate.toDateString() === today.toDateString()
          ? "bg-[#F7F7FF] text-black"
          : "";

      calendarDays.push(
        <Button
          variant="default"
          key={day}
          className={`w-1/7 h-24 font-bold flex items-center justify-center  cursor-pointer ${eventClass} ${todayClass} hover:text-white hover:bg-blue-600`}
        >
          {day}
        </Button>
      );
    }

    return calendarDays;
  };

  return (
    <div className=" bg-gray-800 shadow-lg rounded-lg p-4 text-white min-h-[720px] max-h-content w-[1020px]">
      <div className="flex justify-between items-center mb-10">
        <Button
          onClick={() => changeMonth(-1)}
          className="py-2 px-4 bg-black rounded"
        >
          Previous
        </Button>
        <h2 className="text-lg font-semibold">
          {new Date(currentYear, currentMonth).toLocaleString("default", {
            month: "long",
            year: "numeric",
          })}
        </h2>
        <Button
          onClick={() => changeMonth(1)}
          className="py-2 px-4 bg-black rounded"
        >
          Next
        </Button>
      </div>
      <div className="grid grid-cols-7 gap-1">
        <div className="text-center font-bold h-16">Sun</div>
        <div className="text-center font-bold h-16">Mon</div>
        <div className="text-center font-bold h-16">Tue</div>
        <div className="text-center font-bold h-16">Wed</div>
        <div className="text-center font-bold h-16">Thu</div>
        <div className="text-center font-bold h-16">Fri</div>
        <div className="text-center font-bold h-16">Sat</div>
        {renderCalendar()}
      </div>
    </div>
  );
};

export default Calendar;
