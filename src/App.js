import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Products from "./pages/Products";
import Categories from "./pages/Categories";
import Suppliers from "./pages/Suppliers";
import Stock from "./pages/Stock";
import Sales from "./pages/Sales";
import Reports from "./pages/Reports";
import Settings from "./pages/Settings";
import Users from "./pages/Users";

const isLoggedIn = () => localStorage.getItem("isLoggedIn") === "true";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Navigate to="/login" />}
        />

        <Route
          path="/login"
          element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Login />}
        />

        <Route
          path="/signup"
          element={isLoggedIn() ? <Navigate to="/dashboard" /> : <Signup />}
        />

        <Route
          path="/dashboard"
          element={isLoggedIn() ? <Dashboard /> : <Navigate to="/login" />}
        />

        <Route path="/products" element={<Products />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/suppliers" element={<Suppliers />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/sales" element={<Sales />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/users" element={<Users />} />
      </Routes>
    </Router>
  );
}

export default App;
