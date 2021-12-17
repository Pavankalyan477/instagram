import "./App.css";
import DM from "./components/DM/DM";
import { Navbar } from "./components/Navbar/Navbar";
import { Suggest } from "./components/suggestions/Suggest";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Suggest />
      {/* <DM /> */}
    </div>
  );
}

export default App;
