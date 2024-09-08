import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import Contact from './Pages/Contact';
import Service from './Pages/Service';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/service' element={<Service/>}/>
          <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
