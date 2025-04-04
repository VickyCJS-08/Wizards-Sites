
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ShopCategory from './Pages/ShopCategory';
import Product from './Pages/Product';
import Shop from './Pages/Shop';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import  men_banner from './Components/Assets/MenBanner.png'
import women_banner from './Components/Assets/womenBanner.png'
import kid_banner from './Components/Assets/Harry-Potter-Banner.jpg'
import wand_banner from './Components/Assets/updateBanner.jpg'
import UCP_banner from './Components/Assets/UCP_banner.png'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
       
        <Routes>
          <Route path='/' element={<Shop />} />
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men" />} />
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women" />} />
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="child" />} />
          <Route path='/wands' element={<ShopCategory banner={wand_banner} category="wands" />} />
          <Route path='/upcoming' element={<ShopCategory banner={UCP_banner} category="UCP" />} />
          <Route path='/product' element={<Product />} >
            <Route path=':productId' element={<Product />} />
          </Route>
          <Route path='/cart' element={<Cart />} />
          <Route path='/login' element={<LoginSignup />} />
        </Routes>
       <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
