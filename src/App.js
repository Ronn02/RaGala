import {Routes, Route} from 'react-router-dom'
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Test from "./components/Test";



function App() {
  return (
    < >
      
    <Navbar />
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='test' element={<Test/>} />

    </Routes>
    
    </>
  );
}

export default App;
