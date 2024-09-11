import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirm] = useState("");
  const [errorEmail, setEmailError] = useState(false);
  const [errorPass, setPassError] = useState(false);
  const [errorConfirmPass, setConfirmPassError] = useState(false);

  const navigate = useNavigate(); // Correct way to initialize useNavigate

  const ErrorHandler = () => {
    if (email && password && confirmPass) {
      if (
        (email.includes("@gmail.com") || email.includes("@gmail.co")) &&
        password.length >= 6 &&
        password === confirmPass
      ) {
        console.log({
          Email: email,
          Password: password,
        });
        setConfirmPassError(false);
        setEmailError(false);
        setPassError(false);
        navigate("/calendar"); // Correct navigation
      }
    } else {
      if (!email || !(email.includes("@gmail.com") || email.includes("@gmail.co"))) {
        setEmailError(true);
      } else {
        setEmailError(false);
      }
      if (!password || password.length < 6) {
        setPassError(true);
      } else {
        setPassError(false);
      }
      if (!confirmPass || confirmPass !== password) {
        setConfirmPassError(true);
      } else {
        setConfirmPassError(false);
      }
    }
  };

  return (
    <div className="form-block">
      <div className="w-full flex justify-center items-center mt-6 h-10">
        <h2 className="text-white font-bold text-2xl mt-10">
         <img src="https://m.media-amazon.com/images/I/51n2Mktp2fL.png" height={"90px"} width={"90px"} alt="" />
        </h2>
      </div>
      <div className="input-groups pt-2 mt-5">
        <input
          type="email"
          className={
            errorEmail ? "border-2 border-red-500" : "border-2 border-[#4caf50]"
          }
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          className={
            errorPass ? "border-2 border-red-500" : "border-2 border-[#4caf50]"
          }
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          className={
            errorConfirmPass
              ? "border-2 border-red-500"
              : "border-2 border-[#4caf50]"
          }
          placeholder="Confirm your password"
          onChange={(e) => setConfirm(e.target.value)}
        />
        <button
          className="bg-[#4caf50] text-white btn-custom"
          onClick={ErrorHandler}
        >
          Signup
        </button>
      </div>
    </div>
  );
}

export default SignUpForm;
