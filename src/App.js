import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Footer from './Shared/Footer/Footer';
import Products from './Pages/allProducts/Products/Products';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Login from './Pages/Login/Login/Login';
import AuthProvider from './context/AuthProvider';
import Register from './Pages/Login/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';


function App() {
  return (
    <div className="App">
      <AuthProvider>
          <Router>
           
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
              </Route>
              <Route path="/allProducts">
                <Products />
              </Route>
              <PrivateRoute path="/productDetails/:productId">
                <ProductDetails />
              </PrivateRoute>
              <PrivateRoute path="/dashboard">
                <Dashboard />
              </PrivateRoute>
              <Route path="/login">
                <Login />
              </Route>
              <Route path="/register">
                <Register />
              </Route>
            </Switch>
            <Footer></Footer>
          </Router>
      
      </AuthProvider>
    </div>
  );
}

export default App;
