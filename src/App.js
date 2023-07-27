
import Nav from "./components/bars/Nav";
import Footer from "./components/home/homeitems/Footer";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";
import CategoryProducts from "./components/products/CategoryProducts";
import AllProducts from "./components/products/AllProducts";
import ProductDetails from "./components/products/ProductDetails";
import Checkout from "./components/products/Checkout";
import { Route, Routes } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path= '/categories' element={<Categories/>}/>
        <Route path = '/category_products' element = {<CategoryProducts/>}/>
        <Route path = '/all_products' element = {<AllProducts/>}/>
        <Route path = '/product_details' element = {<ProductDetails/>}/>
        <Route path = '/checkout' element = {<Checkout/>}/>
      </Routes> 
      <Footer/>
    </>
  );
}

export default App;


// in react-router-dom 6, the switch is changed to Routes and component is changed to element, the link is changed to
// NavLink and the redirects are changed to Navigate, you dont need to use exact since the use of * in the parent
// make use of it.
