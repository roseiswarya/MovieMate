import "./css/App.css";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MugilWorks from "./pages/MugilWorks";
import {Routes, Route} from "react-router-dom";
import { MovieProvider } from "./contexts/MovieContext";
import NavBar from "./components/NavBar";


function App() {
  return (
      <MovieProvider>
        <NavBar />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/favorites" element={<Favorites />}/>
          <Route path="/mugil-works" element={<MugilWorks />} />
        </Routes>
      </main>
      </MovieProvider>
    
  
    
  );
}

export default App;
