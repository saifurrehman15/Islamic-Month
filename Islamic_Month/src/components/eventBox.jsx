function Events(props) {
  const {
    setModal2,
    setBox,
    dayEvents,
    setObj,
    setModal3,
    setSelectedEvent,
    data,
    day,
  } = props;

  return (
    <div>
      {dayEvents.length > 0 ? (
        <div className="flex gap-2">
          <div
            key={`event-${0}`}
            onClick={(e) => {
              e.stopPropagation(); // Prevent modal from closing
              setModal2(true); // Open modal2
              setSelectedEvent(dayEvents[0]); // Set the clicked event
            }}
            className="border bg-[#363636]  rounded-full boxes   hover:bg-black text-sm text-white ps-1 flex justify-between items-center"
            style={{
              position: "absolute",
              top: "-1px",
              left: "-1px",
              zIndex: 1,
            }}
          >
            {dayEvents[0]?.saintName.slice(0, 6)}
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent the modal from closing
                // Delete event logic
                const updatedData = data.filter(
                  (item) =>
                    item.saintName !== dayEvents[0]?.saintName ||
                    item.boxDate !== dayEvents[0]?.boxDate
                );

                // Update the state without reloading
                setObj(updatedData); // Assuming 'obj' holds your events
                localStorage.setItem("dataAdd", JSON.stringify(updatedData));
              }}
              className="text-red-400 px-2 rounded hover:text-blue-400"
            >
              &times;
            </button>
          </div>
          {dayEvents.length > 1 || screen.width < 992 ? (
            <span
              onClick={(e) => {
                e.stopPropagation();
                setBox(day);
                setModal3(true);
              }}
              className={screen.width<992?"cursor-pointer hover:bg-gray-600 hover:text-white rounded w-5 h-5 flex items-center justify-center absolute top-0 left-5":"cursor-pointer hover:bg-gray-600 hover:text-white rounded w-5 h-5 flex items-center justify-center absolute top-0 right-1"}
            >
              {screen.width < 992 ? (
                <span
                  className="border bg-[#363636] rounded-full w-10 h-5 text-center    hover:bg-black text-sm text-white ps-1 flex justify-between items-center"
                  style={{
                    position: "absolute",
                    fontSize: "8px",
                    top: "-1px",
                    left: "-16px",
                    zIndex: 1,
                  }}
                >
                  events
                </span>
              ) : (
                "..."
              )}
            </span>
          ) : (
            ""
          )}
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Events;
