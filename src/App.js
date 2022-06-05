
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home";
import About from "./pages/about";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={ <Home /> }/>
        <Route path="/about" element={ <About /> }/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;