
import './App.css';

import { Route, Routes } from 'react-router-dom';
import  Home  from './Components/Home';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import Services from "./Components/Services";
import Contact from "./Components/Contact";
import Upholstering from "./Components/Upholstering";

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <NavBar />
      </header>
      
      <Routes>

<Route path="/" element=<Home/> />
<Route path='Services' element=<Services /> />
<Route path='Upholstering' element=<Upholstering/> />
<Route path='Contact' element=<Contact /> />

</Routes>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
