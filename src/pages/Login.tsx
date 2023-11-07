import "../styles/_login.scss";
import "@fontsource/roboto/400.css";
import Loginimg from "../assets/login-img.jpg";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import PersonOutline from "@mui/icons-material/PersonOutline";
import LockIcon from "@mui/icons-material/LockOutlined";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  return (
    <div className="bg-blue-100 min-h-screen flex items-center justify-center custom-background">
      <div className="mx-4 sm:max-w-xl sm:flex sm:shadow-lg rounded-lg bg-white">
        <div
          className="hidden sm:block sm:w-1/2 bg-cover bg-center"
          style={{ backgroundImage: `url(${Loginimg})` }}
        ></div>
        <div className="sm:w-1/2 p-8 sm:p-12">
          <h4 className="text-md font-semibold text-gray-600 mb-4">
            <span className="border-t-4 border-purple-600 rounded ">Login</span>{" "}
            as an Admin User
          </h4>

          <div className="space-y-6 mt-8">
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              className="w-full"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <PersonOutline />
                  </InputAdornment>
                ),
              }}
            />

            <TextField
              id="password"
              label="Password"
              variant="outlined"
              className="w-full"
              type="password"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <LockIcon />
                  </InputAdornment>
                ),
              }}
            />

            <Button
              variant="contained"
              className="text-white w-full"
              onClick={() => navigate("/admin/otp")}
            >
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
