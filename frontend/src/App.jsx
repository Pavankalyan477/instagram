
import './App.css';
import { Navbar } from './components/Navbar/Navbar';
import {Suggest} from "./components/suggestions/Suggest"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Suggest/>
    </div>
  );
}

export default App;
