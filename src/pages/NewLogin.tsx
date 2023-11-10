import image from "../assets/bg-1.jpg";
import "../styles/newlogin.css";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";
import Slide1 from "../assets/4190945.jpg";
import Slide2 from "../assets/5179450.jpg";
import Slide3 from "../assets/7990317.jpg";

function App() {
  var items = [
    {
      image: Slide1,
      name: "UPI Collects:",
      description:
        "We have several applications of UPI for businesses UPI payment gateway, QR code checkout.",
    },
    {
      image: Slide2,
      name: "Payouts:",
      description:
        "Secure fund transaction to bank accounts and UPI id's. Just use our Payouts Services to roll out bulk/individual payments",
    },
    {
      image: Slide3,
      name: "Easy Integration:",
      description:
        "Secure fund transaction to bank accounts and UPI id's. Just use our Payouts Services to roll out bulk/individual payments",
    },
  ];

  function Item(props) {
    return (
      <Paper>
        <img
          src={props.item.image}
          className="md:w-full h-[60vh] border-none rounded-lg bg-[#0f172a]"
        />
        <h2 className="text-white font-bold  text-2xl bg-[#0f172a] pt-6">
          {props.item.name}
        </h2>
        <p className="text-white font-normal border-none outline-none text-md bg-[#0f172a]">
          {props.item.description}
        </p>
      </Paper>
    );
  }

  return (
    <section className="flex w-[100%] h-[100vh] ">
      <div className=" bg-[#0f172a] w-[70%]  lg:w-[50%] xl:w-[70%] md:flex hidden justify-center items-center ">
        <Carousel className="w-2/5">
          {items.map((item, i) => (
            <Item key={i} item={item} />
          ))}
        </Carousel>
      </div>
      <div className=" bg-[#1e293b]  md:w-[50%] lg:w-[30%] xl:w-[30%]  w-[100%] flex justify-center items-center">
        <div className="  m-auto ">
          <div className="flex md:w-[350px] w-[300px] justify-center flex-col">
            <h1 className="text-3xl font-medium mb-8 text-white">
              Welcome back.
            </h1>
            <label className="text-[#94A3B8]">Email address</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-[#273346] rounded-lg mb-4 placeholder-style focus: outline-none bg-[#0f172a]"
              type="text"
              placeholder="Email Address"
            />
            <label className="text-[#94A3B8]">Password</label>
            <input
              className="text-sm w-full px-4 py-2 border border-solid border-[#273346] rounded-lg mb-4 placeholder-style focus:outline-none bg-[#0f172a]"
              type="password"
              placeholder="Password"
            />
            <div className="text-center md:text-left">
              <button
                className="bg-[#8b5cf6] hover:bg-purple-400 px-4 py-3 mt-4 text-white  rounded-lg text-md font-semibold tracking-wider w-full"
                type="submit"
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;
