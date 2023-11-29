import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import WrapNavbar from './components/WrapNavbar';
import Product from './components/Product';
import Cart from './components/Cart'
import ProductDetail from './components/ProductDetail'
import Search from './components/Search'
import { items } from './components/Data';

function App() {

  return (
    <>
      <Router>
      <Navbar />
      <WrapNavbar />
     <Routes>
      <Route path ='/' element={<Product items={[...items]} />} />
      <Route path ='/product/:id' element={<ProductDetail />} />
      <Route path ='/search/:term' element={<Search />} />
      <Route path ='/cart' element={<Cart />} />
     </Routes>
      </Router>
    </>
  );
}

export default App;
