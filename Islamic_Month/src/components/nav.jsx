function NavigationBar({ selectedMonth, setMonth, months,year }) {
  return (
    <div className="nav">
      <div>
        <h1 className="text-white"> ISLAMIC HIJRI</h1>
      </div>
      <div >
       <h1 className="text-white ms-[30px]"> {months[selectedMonth]} {year}</h1>
      </div>
      <div className="text-white font-semibold select-container">
        <span className="me-2"> Select Month</span>
        <select
          id="select"
          onChange={(e) => setMonth(Number(e.target.value))}
          value={selectedMonth}
        >
          {months.map((elem, ind) => (
            <option key={ind} value={ind}>
              {elem}
            </option>
          ))}
        </select>
      </div>
    </div>
    
  );
}

export default NavigationBar;
