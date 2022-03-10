import Nav from "./Nav";
import Routes from "./Routes";
import { BrowserRouter } from "react-router-dom";


/** App component
 * Renders <Nav /> and <Routes />
 * 
 * App -> {Nav, Routes}
 */
function App() {
  console.log("App");
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes />
      </BrowserRouter>
    </div>
  );
}

export default App;
