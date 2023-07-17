// import logo from './logo.svg';
// import './App.css';

import Auth from "./components/auth";
import "./App.css"
import SignupLoginHeader from './components/loginsignupheader';
import { Routes, Route} from 'react-router-dom'
import Footer from "./components/footer";
import Login from "./components/login";

function App() {
  return (
    // <div className="App">
    // </div>
    <div>
       <SignupLoginHeader />
          <Routes>
            <Route path="/" element={<Login />} />    
            <Route path="/signup" element={<Auth />} />
          </Routes>
       <Footer />   
    </div>
   
  );
}

export default App;
