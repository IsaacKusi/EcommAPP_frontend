
import Nav from "./components/bars/Nav";
import Footer from "./components/home/homeitems/Footer";
import Home from "./components/home/Home";
import Categories from "./components/categories/Categories";
import Category_Products from "./components/Products/Category_Products";
import AllProducts from "./components/Products/AllProducts";
import { Route, Switch } from 'react-router-dom'

const App = () => {

  return (
    <>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path= '/categories' component={Categories}/>
        <Route path = '/category_products' component = {Category_Products}/>
        <Route path = '/all_products' component = {AllProducts}/>
      </Switch> 
      <Footer/>
    </>
  );
}

export default App;


// in react-router-dom 6, the switch is changed to Routes and component is changed to element.
