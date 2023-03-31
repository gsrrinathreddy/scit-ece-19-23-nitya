import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Aboutus from './Pages/Aboutus';
import Experience from './Pages/Experience';
import Hobies from './Pages/Hobies';
import Qualifications from './Pages/Qualifications';
import Skills from './Pages/Skills';
export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="Aboutus" element={<Aboutus/>}/>
        <Route path="Experience" element={<Experience/>}/>
        <Route path="Hobies" element={<Hobies/>}/>
        <Route path="Qualifications" element={<Qualifications/>}/>
        <Route path="Skills" element={<Skills/>}/>

      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

