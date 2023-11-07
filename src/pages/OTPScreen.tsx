import { useState } from "react";
import "../styles/_login.scss";

const OTPInput = () => {
  const [otp, setOtp] = useState(["", "", "", ""]);

  const handleChange = (e: any, index: any) => {
    let value = e.target.value;
    if (isNaN(value)) return; // Allow only numeric input

    const newOtp = [...otp];
    newOtp[index] = value.length > 1 ? value[value.length - 1] : value;
    setOtp(newOtp);

    if (e.target.nextElementSibling && value !== "") {
      e.target.nextElementSibling.focus();
    }
  };

  const handleKeyDown = (e: any, index: any) => {
    if (e.key === "Backspace" && otp[index] === "" && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      const prevInput = document.getElementById(`otp-${index - 1}`)!;
      prevInput.focus();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen customImage">
      <p className="mb-4 text-lg font-semibold">Please enter the OTP here:</p>
      <div className="flex justify-center">
        {otp.map((value, index) => (
          <input
            key={index}
            id={`otp-${index}`}
            type="text"
            className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none"
            value={value}
            onChange={(e) => handleChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            maxLength={1}
          />
        ))}
      </div>
      <button className="mt-10 border-2 border-solid border-blue-500 bg-blue-500 w-[200px] p-2 rounded-lg text-white font-semibold">
        Verify OTP
      </button>
    </div>
  );
};

export default OTPInput;
