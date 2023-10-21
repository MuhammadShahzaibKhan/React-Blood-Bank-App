import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../screens/login";
import SignUp from "../../screens/signUp";
import Protected from "../../screens/protected";
import SelectOption from "../../screens/SelectOption";
import Donor from "../../screens/Donor";
import Acceptor from "../../screens/Acceptor";

export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Protected Screen={SelectOption} />} />
          <Route path="/donor" element={<Donor />} />
          <Route path="/acceptor" element={<Acceptor />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}
