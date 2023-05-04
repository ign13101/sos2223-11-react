import Header from "./components/Header";
import Home from "./components/Home";
import Associations from "./components/Associations";
import Association from "./components/Association";
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  

function App() {
  return (
    <Router >
      <Header />
      <Routes>
        <Route path="/" element={<Home />}>
          {/* Your default component */}
        </Route>
        <Route path="/home" element={<Home />}>
          {/* Your default component */}
        </Route>
        <Route path="/association-stats" element={<Associations />}>
          {/* Your about component */}
        </Route>
        <Route path="/association-stats/:province/:registration_date" element={<Association />}>
          {/* Your about component */}
        </Route>
      </Routes>
      
    </Router>

  );
}

export default App;