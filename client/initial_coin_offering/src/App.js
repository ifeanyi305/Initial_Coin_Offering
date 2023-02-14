import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./component/Navbar";
import IcoList from "./pages/IcoList";
import Footer from "./component/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/ico-list" element={<IcoList />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
