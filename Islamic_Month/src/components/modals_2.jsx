function Modals_2({
  selectedBox,
  months,
  selectedMonth,
  selectedEvent,
  setModal2,
}) {
  console.log(selectedEvent);

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
            onClick={() => setModal2(false)} // Close modal2
            className="text-gray-800 bg-red-500 px-2 rounded"
          >
            &times;
          </button>
        </div>
        <div className="mt-4 overflow-y-scroll h-60 p-1">
          {selectedEvent.image ? (
            <img
              src={selectedEvent.image}
              alt="Image"
              width={"100%"}
              className="h-40 mb-2 rounded-lg"
            />
          ) : (
            ""
          )}

          <h4 className="bg-slate-900 rounded p-2 mb-2 border-2 border-[#4caf50]">
            <strong>Event : </strong> {selectedEvent.saintName}
          </h4>
          <p className="bg-blue-600 p-2 rounded mb-2 border-2 border-[#000]">
            <strong>Date of Birth : </strong> {selectedEvent.dob}
          </p>
          <p className="bg-slate-900 rounded p-2 mb-2 border-2 border-[#4caf50]">
            <strong>City : </strong> {selectedEvent.city}
          </p>
          <p className="bg-blue-600 p-2 rounded mb-2 border-2 border-[#000]">
            <strong>Date of Death : </strong> {selectedEvent.dod}
          </p>
          <p className="bg-slate-900 p-2 rounded mb-2 border-2 border-[#4caf50]">
            <strong>Introduction : </strong> {selectedEvent.introduction}
          </p>
        </div>
        <div className="mt-4 text-right">
          <button
            onClick={() => setModal2(false)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
export default Modals_2;
