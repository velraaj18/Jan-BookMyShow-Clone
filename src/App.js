// import "~slick-carousel/slick/slick.css";
// import "~slick-carousel/slick/slick-theme.css";
// App.js
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
