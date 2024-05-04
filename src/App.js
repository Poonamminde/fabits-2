import "./App.css";
import Sidebar from "./component/sidebar";
import Main from "./component/main";

function App() {
  return (
    <div className="app-container">
      <Sidebar />
      <div id="partition"></div>
      <Main />
    </div>
  );
}

export default App;
