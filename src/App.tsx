import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loader from "./componenets/Loader";

const Dashboard = lazy(() => import("./pages/Dashboard"));
const Products = lazy(() => import("./pages/Products"));
const Customers = lazy(() => import("./pages/Customers"));
const Transaction = lazy(() => import("./pages/Transaction"));
const Login = lazy(() => import("./pages/Login"));
const OTP = lazy(() => import("./pages/OTPScreen"));

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Products />} />
            <Route path="/admin/customer" element={<Customers />} />
            <Route path="/admin/transaction" element={<Transaction />} />
            <Route path="/admin/login" element={<Login />} />
            <Route path="/admin/otp" element={<OTP />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
