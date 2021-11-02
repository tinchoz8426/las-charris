import { Fragment } from 'react';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Header from "./components/Header";

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Header/>
    </Fragment>
  );
}

export default App;
