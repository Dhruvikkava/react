import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./components/Header";
import { routerList } from "./routes/routeList";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        {routerList?.map((el) => {
          return <Route path={el.path} element={el.element} />;
        })}
      </Routes>
    </Router>
  );
}

export default App;
