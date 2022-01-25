// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom"
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div>
      {/* <Navbar></Navbar> */}
      <Router>
        <Routes>
          <Route exact path= "/portfolio" >
            <Portfolio/>
            </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
