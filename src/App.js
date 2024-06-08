import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import About from './Component/About';
import Service from './Component/Service';
import Contact from './Component/Contact';
import Faq from './Component/Faq';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/a" element={<About/>}/>
        <Route path="/b" element={<Service/>}/>
        <Route path="/c" element={<Contact/>}/>
        <Route path="/d" element={<Faq/>}/>
      </Routes>
      </BrowserRouter>
  );
}

export default App;
