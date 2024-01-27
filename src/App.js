// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MoviePage from "./pages/MoviePage";
import PlayPage from "./pages/PlayPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movie/:id" element={<MoviePage />} />
      <Route path="/play" element={<PlayPage />} />
    </Routes>
  );
}

export default App;
