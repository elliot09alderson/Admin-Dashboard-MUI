import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../componenets/AdminSidebar";
import spiderman from "../assets/spiderman.png";
import data from "../assets/data/data.json";
import { HiTrendingDown, HiTrendingUp } from "react-icons/hi";
import { BiMaleFemale } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { BarChart, DoughnutChart } from "../componenets/Chart";
// import DashboardTable from "../componenets/DashboardTable";
const Dashboard = () => {
  return (
    <div className="adminContainer">
      {" "}
      <AdminSidebar />
      <main className="dashboard">
        <div className="navbar">
          <BsSearch />
          <input type="text" placeholder="Search for Data, Users, Docs" />
          <FaRegBell />
          <img src={spiderman} alt="User" />
        </div>
        <section className="widgetContainer">
          <WidgetItem
            percent={40}
            amount={true}
            value={340000}
            heading="Revenue"
            color="rgb(0,155,255)"
          />
          <WidgetItem
            percent={-14}
            value={400}
            heading="Users"
            color="rgb(0,198,202)"
          />
          <WidgetItem
            percent={90}
            value={3000}
            heading="Products"
            color="rgb(76,0,255)"
          />
          <WidgetItem
            percent={34}
            value={23000}
            heading="Transactions"
            color="rgb(255,196,0)"
          />
        </section>
        <section className="graphContainer">
          <div className="revenueChart">
            <h2>Revenue & Transaction</h2>
            {/* Graph Here */}
            <BarChart
              data_1={[300, 144, 433, 655, 237, 755, 190]}
              data_2={[200, 444, 556, 778, 445, 705, 340]}
              // horizontal={true}
              title_1="Revenue"
              title_2="Transaction"
              bgColor_1="rgb(0,115,255)"
              bgColor_2="rgb(53,162,235,0.8)"
            />
          </div>
          <div className="dashboardCategories">
            <h2>Inventory</h2>
            <div>
              {data.categories.map((item, index) => (
                <CategoryItem
                  key={item.heading + index}
                  heading={item.heading}
                  value={item.value}
                  color={`hsl(${item.value * 4},${item.value}%,50%)`}
                />
              ))}
            </div>
          </div>
        </section>
        <section className="transactionContainer">
          <div className="genderChart">
            <h2>Gender Ratio</h2>
            {/* Chart */}
            <DoughnutChart
              labels={["Female", "Male"]}
              data={[12, 19]}
              backgroundColor={["hsl(340,82%,56%)", "rgba(53,162,235,0.8)"]}
              cutout={90}
            />
            <p>
              <BiMaleFemale />
            </p>
          </div>
          {/* <DashboardTable data={data.transaction} /> */}
        </section>
      </main>
    </div>
  );
};
interface WidgetItemProps {
  heading: string;
  value: number;
  percent: number;
  color: string;
  amount?: boolean;
}

const WidgetItem = ({
  heading,
  value,
  percent,
  amount = false,
  color,
}: WidgetItemProps) => {
  return (
    <article className="widget">
      <div className="widgetInfo">
        <p>{heading}</p>
        <h4>{amount ? `$${value}` : value}</h4>
        {percent > 0 ? (
          <span className="green">
            <HiTrendingUp />+{percent}%{" "}
          </span>
        ) : (
          <span className="red">
            <HiTrendingDown />
            {percent}%{" "}
          </span>
        )}
      </div>
      <div
        className="widgetCircle"
        style={{
          background: `conic-gradient(${color}${
            (Math.abs(percent) / 100) * 360
          }deg,rgb(255,255,255)0)`,
        }}
      >
        <span style={{ color }}>{percent}%</span>
      </div>
    </article>
  );
};

interface CategoryItemProps {
  color: string;
  value: number;
  heading: string;
}
const CategoryItem = ({ color, value, heading }: CategoryItemProps) => {
  return (
    <div className="categoryItem">
      <h5>{heading}</h5>
      <div>
        <div style={{ backgroundColor: color, width: `${value}%` }}></div>
      </div>
      <span>{value}%</span>
    </div>
  );
};
export default Dashboard;
