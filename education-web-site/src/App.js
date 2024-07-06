
import './App.css';
import About from './Component/About';
import CouseHome from './Component/Allcourses/CouseHome';
import Home from './Component/Home';
import Navbar from './Component/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <main>
        <div id='home'>
        <Home />
        </div >
        <div  id='about'>
          <About/>
        </div>
        <div id='couses'> 
          <CouseHome/>
        </div>
      
      </main>
     
    </div>
  );
}

export default App;
