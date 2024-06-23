
import './App.css';
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
      
      </main>
     
    </div>
  );
}

export default App;
