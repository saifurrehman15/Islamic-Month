import { Route, Routes, BrowserRouter, Router } from "react-router-dom";
import SignUpForm from "../signupform";
import IslamicCalendar from "../calendar/calendar";

function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<SignUpForm />} /> */}
        <Route path="/" element={<IslamicCalendar />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routers;
