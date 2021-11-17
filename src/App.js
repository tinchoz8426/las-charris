import { Fragment } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Subheader from './components/Subheader';
import ItemListContainer from './components/ItemListContainer';
import Footer from './components/Footer';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemCount from './components/ItemCount';

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Header/>
      <Subheader/>
      {/* <ItemListContainer/> */}
      {/* <ItemCount stock="8" initial="1"/> */}
      <ItemDetailContainer />
      <Footer/>
    </Fragment>
  );
}

export default App;
