import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home';
import About from './Pages/About';
import Notfound from './Pages/Notfound';
import Contact from './Pages/Contact';
import Service from './Pages/Service';
import Website from './Pages/Website';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          {/* nested Routing */}
          <Route path='/service'>
            <Route index element={<Service/>}/>
            <Route path='website' element={<Website/>} />
          </Route>
          <Route path='*' element={<Notfound/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
