import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Details from './pages/Details';
import Navbar from './component/Navbar';
import IcoList from './pages/IcoList';
import CreateICO from './pages/CreateICO';
import Footer from './component/Footer';

const App = () => (
  <>
    <body className="dark:bg-[#181A1B]">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ico-list" element={<IcoList />} />
        <Route path="/details" element={<Details />} />
        <Route path="/CreateICO" element={<CreateICO />} />
      </Routes>
      <Footer />
    </body>
  </>
);

export default App;
