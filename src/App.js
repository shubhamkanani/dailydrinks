
import React from 'react';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

//css
import './Asset/css/main.css';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components and container
import Header from './Components/CommenComponents/Header'
import DrinkOrderList from './Container/DrinkOrderList'
import OrderDrink from './Container/OrderDrink'
import EditOrder from './Container/EditOrder'
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/orderList" name="Login Page" component={DrinkOrderList} />
          <Route exact path="/order" name="Login Page" component={OrderDrink} />
          <Route exact path="/editorder/:id" name="Login Page" component={EditOrder} />
          <Redirect from="/" to="/orderList" />
        </Switch>
      </BrowserRouter>
      <ToastContainer/>
    </div>
  );
}

export default App;
