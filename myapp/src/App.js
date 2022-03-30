import React from "react";
import Home from "./components/home/";
import Header from "./common//header/";
import Footer from "./common/footer/";
import "./App.css";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <div className="body">
          <Home />
          
        </div>
        <Footer />
      </>
    </div>
  );
}

export default App;
