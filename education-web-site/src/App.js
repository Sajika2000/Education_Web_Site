
import './App.css';
import About from './Component/About';
import CouseHome from './Component/Allcourses/CouseHome';
import Contact from './Component/Contact';
import Fotter from './Component/Fotter';
import Home from './Component/Home';
import Navbar from './Component/Navbar';
import Pricing from './Component/Price/Pricing';
import Team from './Component/Team/Team';

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
        <div id='course'> 
          <CouseHome/>
        </div>
        <div id='team'> 
          <Team/>
        </div>
        <div id='price'> 
          <Pricing/>
        </div>
        <div id='contact'> 
          <Contact/>
        </div>
      
      </main>
      <Fotter/>
     
    </div>
  );
}

export default App;
