import logo from "./logo.svg";
import "./App.css";
import Saludar from "./components/Saludar";

function App() {
  const user = {
    nombre: "Abelardo Cuesta",
    edad: "25",
    eps: "Nueva EPS",
    universidad: "UNAD",
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Saludar user={user} name="Abelardo Cuesta" edad="20" />
        {/*         <Saludar name="Jhon Cuesta" edad="31" /> */}
      </header>
    </div>
  );
}

export default App;
