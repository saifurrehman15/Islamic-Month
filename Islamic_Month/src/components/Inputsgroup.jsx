import Inputs from "./input";

function InputsGroups({
  setCity,
  setName,
  setDOB,
  setDOD,
  setIntro,
  setTombImg,
}) {
  return (
    <div>
      <Inputs
        type={"text"}
        placeholder={"نام درج کریں"}
        onchange={(e) => {
          setName(e.target.value);
        }}
        className="inputs-modal"
      />

      <Inputs
        type={"text"}
        placeholder={"شہر درج کریں"}
        onchange={(e) => {
          setCity(e.target.value);
        }}
      />
      <Inputs
        type={"date-local"}
        placeholder={"پیدائش درج کریں"}
        onchange={(e) => {
          setDOB(e.target.value);
        }}
      />
      <Inputs
        type={"date-local"}
        placeholder={"وفات درج کریں"}
        onchange={(e) => {
          setDOD(e.target.value);
        }}
      />
      <Inputs
      type={"text"}
      placeholder={"تعارف"}
      onchange={(e)=>{
        setIntro(e.target.value)
      }}
      />
      {/* <div className="flex items-center justify-center w-1/2">
        <label
          htmlFor="dropzone-file"
          className="flex flex-col items-center justify-center w-full h-56 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer   text-white"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-8 h-8 mb-4 text-white dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
            <p className="mb-2 text-sm text-white dark:text-white">
              <span className="font-semibold">Click to upload</span> or drag and
              drop
            </p>
            <p className="text-xs text-white dark:text-gray-white">
              SVG, PNG, JPG or GIF (MAX. 800x400px)
            </p>
          </div>

          <input
            id="dropzone-file"
            type="file"
            className="hidden"
            onChange={(e) => {
              setTombImg(URL.createObjectURL(e.target.files[0]));
            }}
          />
        </label>
      </div> */}
      <Inputs 
      type={'url'}
      placeholder={"مزار کی تصویر(Optional)"}
      onchange={(e) => {
        setTombImg(e.target.value);
      }}
      />
    </div>
  );
}

export default InputsGroups;
