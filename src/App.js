import React from 'react';
import "./resources/styles.css"
import Header from "./Components/Header-Footer/Header"
import Featured from "./Components/Featured"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
    <div style={{ height: "1500px", backgroundColor: "dodgerblue" }}>
      <Header />
      <Featured />
    </div>
  );
}

export default App;
