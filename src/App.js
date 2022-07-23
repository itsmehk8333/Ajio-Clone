import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import {Routes, Route } from 'react-router-dom'
import Homepage from './Pages/Homepage';
import Mens from './Pages/Men';
import Womens from './Pages/Women';
import Kid from './Pages/Kids';
import Indie from './Pages/Indie';
import Authentication from './Components/Authentication';
import SinglePage from './Pages/SinglePage';
import Cart from './Components/Cart';

function App() {
  return (
    <div className='container'>
<Navbar />
<Routes>
<Route path='/' element={<Homepage />} ></Route>
<Route path='/Men' element={<Mens />}></Route>
<Route path='/Women' element={<Womens/>}></Route>
<Route path='/Kids' element={<Kid />}></Route>
<Route path='/Indie' element={<Indie />}></Route>
<Route path='/login' element={<Authentication />}></Route>
<Route path='/singlepage' element={<SinglePage />}></Route>
<Route path='/cart' element={<Cart />}></Route>
</Routes>
    </div>
  );
}

export default App;



