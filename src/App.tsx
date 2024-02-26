import { useState } from "react";
import Mainpage from "./components/mainpage";
import movieImg from "/src/images/movie-img.png";

function App() {
  return (
    <div className="p-5">
      <h1 className="text-4xl font-bold text-center mb-5">Bioskop XX1</h1>
      <Mainpage />
    </div>
  );
}

export default App;
