import logo from './logo.svg';
import './App.css';
import { Aboutme } from './Aboutme.js';
import { Navbar } from './navbar.js';
import { Hero } from './Hero';

function App() {
  return (
    <div className='app'>
      <div className='rapper'>

        <Navbar />
        <Hero />
        <Aboutme />

        {/* Second Fold */}
        <div className='test1'>
          <div className='aboutme'>
            <header className='header'>
              Audient.
            </header>
            <p className='body'>
              Bringing mixer software into the 21st century with the first user-centered mixer interface.
            </p>
            <button className='primarybutton'>
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
