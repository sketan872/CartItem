import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Cart from './Pages/Cart';
import Home from './Pages/Home';
function App() {
  return (
    <div >
      <div><Navbar/></div>
      <Routes>
<Route path='/' element={<Home/>}/>
<Route path='/Cart' element={<Cart/>} />

      </Routes>
          </div>
  );
}

export default App;
