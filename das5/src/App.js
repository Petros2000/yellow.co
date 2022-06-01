import './App.css';
import Nav from './nav';
import Aside1 from './aside1';
import Card from './card';
import Aside from './Aside';
import Aside2 from './Aside2';
import  BraceletsSlide from'./Slider';
import Footer from './Footer';







function App() {
  return (
    <div className="App">
      <Nav />
      <Aside1 />
      <Card />
      <Aside />
      <Aside2/>
      <BraceletsSlide/>
      <Footer/>
      
    </div>
  );
}

export default App;
