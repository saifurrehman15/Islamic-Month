import TableCells from "./tableCells";

function CalendarTable({
  months,
  selectedMonth,
  currentYear,
  data,
  setModal,
  setModal2,
  setModal3,
  setBox,
  setSelectedEvent,
  setObj,
  date,
  currentMonths,
}) {
  let monthsEng = [
    "Muharram",
    "Safar",
    "Rabi' al-Awwal",
    "Rabi' al-Thani",
    "Jumadi' al-Awwal",
    "Jumadi' al-Thani",
    "Rajab",
    "Shaban",
    "Ramadan",
    "Shawwal",
    "Rajab",
    "Dhu al-Qi'dah",
    "Dhu al-Hijjah",
  ];
  return (
    <div>
      <div>
        <h1
          className="text-white  ms-[30px] font-bold font-medium w-60 bg-blue-900 p-1 rounded-xl
          text-center
          relative top-5
        mb-2 text-lg"
        >
          {selectedMonth == currentMonths
            ? date + " " + monthsEng[selectedMonth] + " , " + currentYear
            :  monthsEng[selectedMonth] + " , " + currentYear}
        </h1>
      </div>
      <div className="calendar-table-container ">
        <table className="calendar-table">
          <thead>
            <tr>
              <th>Sun</th>
              <th>Mon</th>
              <th>Tue</th>
              <th>Wed</th>
              <th>Thu</th>
              <th>Fri</th>
              <th>Sat</th>
            </tr>
          </thead>
          <tbody>
            <TableCells
              selectedMonth={selectedMonth}
              months={months}
              setModal={setModal}
              setModal2={setModal2}
              setModal3={setModal3}
              setBox={setBox}
              setSelectedEvent={setSelectedEvent}
              setObj={setObj}
              data={data}
            />
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CalendarTable;
