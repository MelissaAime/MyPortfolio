import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './App.css';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Resume } from './components/Resume/Resume';
import { Skill } from './components/Skill/Skill';
import { About } from './components/About/About';
import { Proyect } from './components/Proyect/Proyect';
import { Contact } from './components/Contact/Contact';


function App() {
  return (
        <BrowserRouter> 
  
            <NavBar/>
  
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/about' element={ <About/> } />
                <Route path='/resume' element={ <Resume/> } />
                <Route path='/proyect' element={ <Proyect/> } />
                <Route path='/skill' element={ <Skill/> } />
                <Route path='/contact' element={ <Contact/> } />
                <Route path='*' element={ <Navigate to='/' /> } />
            </Routes>
  
        </BrowserRouter>

  );
}

export default App;
