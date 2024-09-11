import React, { useState } from "react";
import moment from "moment-hijri";
import CalendarTable from "../components/calenderIntegration";
import Modals_1 from "../components/modals_1";
import Modals_2 from "../components/modals_2";
import Modals_3 from "../components/modals_3";
import NavigationBar from "../components/nav";

const IslamicCalendar = () => {
  const currentHijriDate = moment();

  const currentDate = currentHijriDate.iDate();
  const currentYear = currentHijriDate.iYear();
  const currentMonth = currentHijriDate.iMonth();
  const [selectedMonth, setMonth] = useState(currentMonth);
  const [modal, setModal] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [selectedBox, setBox] = useState("");
  const [obj, setObj] = useState("");

  let data = JSON.parse(localStorage.getItem("dataAdd")) || [];

  const months = [
    "محرم",
    "صفر",
    "ربيع الأول",
    "ربيع الثاني",
    "جمادى الأولى",
    "جمادى الآخرة",
    "رجب",
    "شعبان",
    "رمضان",
    "شوال",
    "ذو القعدة",
    "ذو الحجة",
  ];

  return (
    <div className="calendar">
      <NavigationBar
        selectedMonth={selectedMonth}
        setMonth={setMonth}
        months={months}
        year={currentYear}
        date={currentDate}
      />

      {selectedMonth !== null && (
        <div>
          {modal && (
            <Modals_1
              selectedBox={selectedBox}
              selectedMonth={selectedMonth}
              setModal={setModal}
            />
          )}
          {modal2 && selectedEvent && (
            <Modals_2
              selectedBox={selectedBox}
              selectedMonth={selectedMonth}
              setModal2={setModal2}
              months={months}
              selectedEvent={selectedEvent}
            />
          )}
          {modal3 && (
            <Modals_3
              selectedBox={selectedBox}
              selectedMonth={selectedMonth}
              setModal2={setModal2}
              setModal3={setModal3}
              months={months}
              selectedEvent={selectedEvent}
              data={data}
              setObj={setObj}
              setSelectedEvent={setSelectedEvent}
            />
          )}

          <CalendarTable
            months={months}
            selectedMonth={selectedMonth}
            currentYear={currentYear}
            data={data}
            date={currentDate}
            currentMonths={currentMonth}
            setModal={setModal}
            setModal2={setModal2}
            setModal3={setModal3}
            setBox={setBox}
            setSelectedEvent={setSelectedEvent}
            setObj={setObj}
          />
        </div>
      )}
    </div>
  );
};

export default IslamicCalendar;
