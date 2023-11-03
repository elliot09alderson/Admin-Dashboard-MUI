import { Column } from "react-table";
import { ReactElement } from "react";
import AdminSidebar from "../componenets/AdminSidebar";
import TableHOC from "../componenets/TableHOC";
interface DataType {
  photo: String;
  name: string;
  price: number;
  stock: number;
  action: ReactElement;
}
const arr: DataType[] = [];
const columns: Column<DataType>[] = [
  { Header: "Photo", accessor: "photo" },
  { Header: "Name", accessor: "name" },
  { Header: "Price", accessor: "price" },
  { Header: "Stock", accessor: "stock" },
  { Header: "Action", accessor: "action" },
];
const Products = () => {
  // const [data] = useState<DataType[]>(arr);
  // const Table = TableHOC<DataType>(
  //   columns,
  //   data,
  //   "dashboard-product-box",
  //   "Products"
  // );
  return (
    <div className="adminContainer ">
      {" "}
      <AdminSidebar />
      {/* <main>{<Table()}</main> */}
      <main></main>
    </div>
  );
};

export default Products;
