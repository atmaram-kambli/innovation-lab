import Home from './pages/Home/Home';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';
import Domains from './pages/Domains/Domains';
import Projects from './pages/Projects/Projects';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


function App() {

  return (
      <>
    <Router>
        <div className='app'>
          <Navbar />
          <Routes>
            <Route path='/' index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/domains' element={<Domains />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/contact' element={<Contact />} />          
          </Routes>
          <Footer />
        </div>
    </Router>
      </>
  );
}

export default App;
