import './App.css';
import logo from './logo.svg'
import Clock from './components/clock';
import RNG from './components/RNG';
// import Converter from './components/converter';

export default function App() {
  return (
    <div className="App d-flex flex-column">
    <div className='navbar navbar- d-flex flex-row-reverse flex-nowrap mb-2'>
      <img src={logo} className="App-logo fixed-top" alt="logo"/>
      <Clock />
    </div>
    <div className='d-flex justify-content-around'>
      <RNG />
    </div>
    <div>
      {/* <Converter /> */}
    </div>
    </div>
  );
}
