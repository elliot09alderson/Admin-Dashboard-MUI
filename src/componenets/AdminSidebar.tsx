import { Link, useLocation, Location } from "react-router-dom";
import {
  RiDashboardFill,
  RiCoupon3Fill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import {
  FaChartBar,
  FaChartPie,
  FaChartLine,
  FaStopwatch,
  FaGamepad,
} from "react-icons/fa";
import { IconType } from "react-icons";

const AdminSidebar = () => {
  const location = useLocation();
  return (
    <aside>
      <h2>Logo</h2>
      <OptionsColumnOne location={location} />
      <OptionsColumnTwo location={location} />
      <OptionsColumnThree location={location} />
    </aside>
  );
};

const OptionsColumnOne = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Dashboard</h5>
      <ul>
        <Li
          url="/admin/dashboard"
          text="Dashboard"
          Icon={RiDashboardFill}
          location={location}
        />
        <Li
          url="/admin/product"
          text=" Product"
          Icon={RiShoppingBag3Fill}
          location={location}
        />
        <Li
          url="/admin/transaction"
          text=" Transaction"
          Icon={AiFillFileText}
          location={location}
        />
        <Li
          url="/admin/customer"
          text=" Customer"
          Icon={IoIosPeople}
          location={location}
        />
      </ul>
    </div>
  );
};
const OptionsColumnTwo = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Charts</h5>
      <ul>
        <Li
          url="/admin/barchart"
          text="Bar"
          Icon={FaChartBar}
          location={location}
        />
        <Li
          url="/admin/piechart"
          text=" Pie"
          Icon={FaChartPie}
          location={location}
        />
        <Li
          url="/admin/linechart"
          text=" Line"
          Icon={FaChartLine}
          location={location}
        />
      </ul>
    </div>
  );
};
const OptionsColumnThree = ({ location }: { location: Location }) => {
  return (
    <div>
      <h5>Apps</h5>
      <ul>
        <Li
          url="/admin/apps/toss"
          text="Toss"
          Icon={FaGamepad}
          location={location}
        />
        <Li
          url="/admin/apps/coupon"
          text=" Coupon"
          Icon={RiCoupon3Fill}
          location={location}
        />
        <Li
          url="/admin/apps/stopwatch"
          text=" Stopwatch"
          Icon={FaStopwatch}
          location={location}
        />
      </ul>
    </div>
  );
};
interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ Icon, text, url, location }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(0,115,255,0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(0,115,255)" : "black",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);
export default AdminSidebar;
