import logo from './logo.svg';
import './App.css';
// import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TopNavigation from "./components/TopNavigation";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header/>
      <TopNavigation />
      <Footer />
    </div>
  );
}

export default App;
