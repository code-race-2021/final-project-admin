import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import ProductForm from './components/formComponents/ProductForm';
import ClientForm from './components/formComponents/ClientForm';
import VendorForm from './components/formComponents/VendorForm';
import ServiceForm from './components/formComponents/ServiceForm';
import DeliveryForm from './components/formComponents/DeliveryForm';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component = { Home } />
        <Route exact path="/create-form/producto" component = { ProductForm } />
        <Route exact path="/create-form/cliente" component = { ClientForm } />
        <Route exact path="/create-form/vendedor" component = { VendorForm } />
        <Route exact path="/create-form/servicio" component = { ServiceForm } />
        <Route exact path="/create-form/delivery" component = { DeliveryForm } />
      </Switch>
    </Router>
  );
}

export default App;
