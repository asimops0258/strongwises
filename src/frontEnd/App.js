import './App.css';
import LayoutBasic from "./Layout/LayoutBasic";

function App({ setLocale }) {
  return (
    <div className="App">
      <LayoutBasic setLocale={setLocale}></LayoutBasic>
    </div>
  );
}

export default App;
