import { Fragment } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Footer from './components/Footer';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Shipping from './pages/Shipping';
import PaymentMethods from './pages/PaymentMethods';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import We from './pages/We';
import You from './pages/You';
import Wholesale from './pages/Wholesale';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/we" element={<We />} />
          <Route path="/you" element={<You />} />
          <Route path="/wholesale" element={<Wholesale />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/payment" element={<PaymentMethods />} />
          <Route path="/category" element={<ItemListContainer/>} />
          <Route path="/category/:catId" element={<ItemListContainer/>} />
          <Route path="/product/:itemId" element={<ItemDetailContainer/>} />
          <Route path="*" element={ <h1>404 - Página no encontrada</h1> } />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
