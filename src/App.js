import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.scss';
import './App.css';
import { BrowserRouter, Routes, Route , Navigate } from 'react-router-dom';
import { NavBar } from './components/Navbar/Navbar';
import { Home } from './components/Home/Home';
import { Resume } from './components/Resume/Resume';


function App() {
  return (
        <BrowserRouter> 
  
            <NavBar/>
  
            <Routes>
                <Route path='/' element={ <Home/> } />
                <Route path='/resume' element={ <Resume/> } />
                <Route path='*' element={ <Navigate to='/' /> } />
            </Routes>
  
        </BrowserRouter>

  );
}

export default App;
