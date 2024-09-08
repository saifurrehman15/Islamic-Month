function Modals_3({
  selectedBox,
  months,
  selectedMonth,
  setModal2,
  setModal3,
  data,
  setSelectedEvent,
  setObj,
}) {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50 text-black"
    >
      <div className="bg-gray-800 text-white rounded-lg shadow-lg max-w-lg w-full p-6">
        <div className="flex justify-between items-center border-b pb-3">
          <h3 className="text-lg font-semibold">
            {selectedBox} {months[selectedMonth]}
          </h3>
          <button
            onClick={() => setModal3(false)}
            className="text-gray-800 bg-red-500 px-2 rounded"
          >
            &times;
          </button>
        </div>
        <div className="mt-4 overflow-scroll h-40 scrollbarHidden">
          {/* Filter events related to the selectedBox and selectedMonth */}
          {data
            .filter(
              (elem) =>
                months[selectedMonth] === elem.month &&
                selectedBox === elem.boxDate
            )
            .map((elem, ind) => (
              <div
                key={ind}
                className="mb-2 w-full bg-[#363636] border border-[#4caf50] hover:bg-black text-white p-2 rounded cursor-pointer flex justify-between"
                onClick={() => {
                  setModal3(false);
                  setModal2(true);
                  setSelectedEvent(elem);
                }}
              >
                {ind + 1 + ")"} {elem.saintName}{" "}
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent the modal from closing
                    // Delete event logic
                    const updatedData = data.filter(
                      (item) =>
                        item.saintName !== elem?.saintName ||
                        item.boxDate !== elem?.boxDate
                    );

                    // Update the state without reloading
                    setObj(updatedData); // Assuming 'obj' holds your events
                    localStorage.setItem(
                      "dataAdd",
                      JSON.stringify(updatedData)
                    );
                    console.log(elem.saintName);
                  }}
                  className="text-red-400 px-2 rounded hover:text-blue-400"
                >
                  &times;
                </button>
              </div>
            ))}
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={() => setModal3(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modals_3;
