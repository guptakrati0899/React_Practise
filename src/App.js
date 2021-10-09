import logo from './logo.svg';
import './App.css';
import Header from '../src/components/header';
import HeaderTwo from './components/headerTwo';
import Greet from './components/greet';
import Welcome from './components/Welcome';
import Hello from './components/hello';
import Greet1 from './components/propsexp';
import Welcome1 from './components/propsclasscomp';
import Message from './components/stateexpMsg';

function App() {
  return (
   <div><Header degree = "Btech"/><Hello/><Welcome/>
   <Greet/><Greet1 name = "Krati" place ="Kanpur"/>
   <Greet1 name = "Nishu" place = "Ghaziabad"/>
   <Welcome1 id = "30"/><Welcome1 id = "50"/>
   <Message/><HeaderTwo size = "20"/></div>
  );
}

export default App;
