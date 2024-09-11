import { useState } from "react";
import Buttons from "./buttons";
import InputsGroups from "./Inputsgroup";

function Modals_1({ selectedBox, selectedMonth, setModal }) {
  const [city, setCity] = useState("");
  const [saintName, setName] = useState("");
  const [DOB, setDOB] = useState("");
  const [DOD, setDOD] = useState("");
  const [imageTomb, setTombImg] = useState("");
  const [intro, setIntro] = useState("");
  const [obj, setObj] = useState([]);
  let data = JSON.parse(localStorage.getItem("dataAdd")) || [];
  const [errorBox, setError] = useState(false);
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
  let int1;
  let int2;
  const [classAdd, setClass] = useState("error-box");

  return (
    <div>
      {errorBox && (
        <div className={classAdd}>
          <h1 className="">Please fill all inputs</h1>
        </div>
      )}
      <div
        id="default-modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-opacity-50 text-white"
      >
        <div className="bg-gray-800 shadow-black rounded-lg shadow-lg border border-[gray] max-w-lg w-full p-6 m-2">
          <div className="flex justify-between items-center border-b pb-3">
            <h3 className="text-lg font-semibold">
              {selectedBox} {months[selectedMonth]}
            </h3>
            <button
              onClick={() => setModal(false)}
              className="text-gray-800  bg-red-500 px-2 rounded"
            >
              &times;
            </button>
          </div>
          <div className="mt-4">
            <InputsGroups
              setCity={setCity}
              setName={setName}
              setDOB={setDOB}
              setDOD={setDOD}
              setIntro={setIntro}
              setTombImg={setTombImg}
            />
          </div>

          <div className="mt-4 text-right">
            <Buttons
              text={
                <>
                  <i className="fa-solid fa-plus"></i> Add
                </>
              }
              onclick={() => {
                if (saintName && city && DOB && DOD && intro) {
                  setModal(false);
                  let details = {
                    boxDate: selectedBox,
                    month: months[selectedMonth],
                    saintName: saintName,
                    city: city,
                    dob: DOB,
                    dod: DOD,
                    introduction: intro,
                    image: imageTomb,
                  };
                  setObj([...obj, details]);

                  data.push(details);
                  localStorage.setItem("dataAdd", JSON.stringify(data));
                } else {
                  clearTimeout(int1);
                  clearTimeout(int2);
                  setError(true);
                  setClass("error-box");
                  int1 = setTimeout(() => {
                    setClass("error-box2");
                  }, 2000);
                  int2 = setTimeout(() => {
                    setError(false);
                  }, 2500);
                }
              }}
              styles={"bg-blue-500 text-white px-4 py-2 rounded"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modals_1;
