
import "./App.css";
import { Routes, Route } from "react-router-dom";
import NavaBar from "./components/navbar/NavBar";
import Home from "./pages/home/Home";
import Details from "./pages/details/Details";
import Favourites from "./pages/favourites/Favourites";

function App() {
  return (
    <div>
      <div className="m-h-screen p-6 bg-white text-gray-600 text-lg">
        <NavaBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/recipe-item/:id" element={<Details />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
