import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import NavBar from './Components/NavBar';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Collection from './Components/Collection';

function App() {
  return (
    <div>
      <BrowserRouter>
          <NavBar />
          <Routes>
            <Route  path="/" element={<Home/>}/>
            <Route  path="/about" element={<About />} />
            <Route path="/collection/:id" element={<Collection />} />
          </Routes>

        </BrowserRouter>
    </div>
  );
}

export default App;
