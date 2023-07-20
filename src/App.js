import { Routes, Route } from 'react-router-dom';
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import LoginOrSignup from "./components/LoginOrSignup";
import Province from './components/Province';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginOrSignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/home" element={<Home />} />
        <Route path="/province" element={<Province/>}/>
        
      </Routes>
    </>
  );
}

export default App;
