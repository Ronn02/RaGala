import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import LoginOrSignup from "./components/LoginOrSignup";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginOrSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/create-account" element={<CreateAccount />} />
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Route path="/home" element={<Home />} />
              
            </>
          }
        />
      </Routes>
    </>
  );
}

export default App;
