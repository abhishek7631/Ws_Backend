import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import Dashboard from "../Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage></LoginPage>} />
        <Route path="/register" element={<RegisterPage></RegisterPage>} />
        <Route path="/dashboard" element={<Dashboard></Dashboard>}></Route>
      </Routes>
    </Router>
  );
}

export default App;
