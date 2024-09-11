import moment from "moment-hijri";
import Events from "./eventBox";

function TableCells({
  selectedMonth,
  months,
  setModal,
  setModal2,
  setModal3,
  setBox,
  setObj,
  setSelectedEvent,
  data,
}) {
  const currentHijriDate = moment(); // Get current Islamic date
  const currentYear = currentHijriDate.iYear(); // Get current Islamic year
  const currentDate = currentHijriDate.iDate();

  const rows = [];
  let cells = [];

  // Calculate the number of days in the selected Hijri month and start day
  const daysInMonth = moment()
    .iYear(currentYear)
    .iMonth(selectedMonth)
    .iDaysInMonth();
  const startOfMonth = moment()
    .iYear(currentYear)
    .iMonth(selectedMonth)
    .startOf("iMonth")
    .day();

  for (let i = 0; i < startOfMonth; i++) {
    cells.push(<td key={`empty-${i}`} className="empty-cell"></td>);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    const isToday =
      day === currentDate && selectedMonth === currentHijriDate.iMonth();

    // Calculate the Gregorian date for this Hijri day
    const gregorianDate = moment()
      .iYear(currentYear)
      .iMonth(selectedMonth)
      .iDate(day)
      .format("DD"); // Format as needed

    const dayEvents = data.filter(
      (elem) => months[selectedMonth] === elem.month && day === elem.boxDate
    );

    cells.push(
      <td
        key={`day-${day}`}
        className="calendar-cell relative rounded cursor-pointer"
        style={{
          background: isToday ? "skyblue" : "",
          border: isToday ? "2px solid #4caf50" : "",
          color: isToday ? "#000" : "",
          position: "relative",
        }}
        onClick={() => {
          setModal(true);
          setBox(day);
        }}
      >
        <Events
          setModal2={setModal2}
          setModal3={setModal3}
          setSelectedEvent={setSelectedEvent}
          selectedBox={setBox}
          setObj={setObj}
          dayEvents={dayEvents}
          data={data}
          day={day}
          setBox={setBox}
        />

        <div className="flex flex-col w-full">
          <div className="flex justify-around flex-col">
            <span className={isToday ? "text-black" : "text-gray-500 font-bold mt-2"}>
              {gregorianDate} {/* Gregorian date */}
            </span>
            <span className={isToday ? "" : "text-blue-400"}>{day}</span>{" "}
            {/* Islamic date */}
          </div>
        </div>
      </td>
    );

    if (cells.length === 7) {
      rows.push(<tr key={`row-${day}`}>{cells}</tr>);
      cells = [];
    }
  }

  if (cells.length > 0) {
    while (cells.length < 7) {
      cells.push(
        <td key={`empty-end-${cells.length}`} className="empty-cell"></td>
      );
    }
    rows.push(<tr key="row-last">{cells}</tr>);
  }

  return rows;
}

export default TableCells;
