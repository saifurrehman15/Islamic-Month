import TableCells from "./tableCells";

function CalendarTable({ months, selectedMonth, currentYear, data, setModal, setModal2, setModal3, setBox, setSelectedEvent, setObj }) {
  return (
    <div>
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
