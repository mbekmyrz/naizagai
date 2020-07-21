import React from "react";
import NavBar from "./components/navbar";
import Jumbo from "./components/jumbotron";
import About from "./components/about";
import Video from "./components/video";
import Processess from "./components/processes";
import Team from "./components/team";
import Footer from "./components/footer";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <Jumbo />
      <main className="container">
        <About />
        <Video />
        <Processess />
        <Team />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
