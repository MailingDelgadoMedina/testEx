import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div >
      <Navbar/>
       <h1 className=" bg-orange-400 text-3xl font-bold underline">
      Hello world!
    </h1>
    <Footer/>
    </div>
  );
}   

export default App;
