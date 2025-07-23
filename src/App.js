import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OlaMundo from "./Pages/OlaMundo";
import Tabela from "./Pages/Tabela";

function Home() {
  return (
    <>
      <OlaMundo />
      <Tabela />
    </>
  );
}

function App() {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/OlaMundo" element={<OlaMundo />} />
          <Route path="/Tabela" element={<Tabela />} />
        </Routes>
        
      </Router>
      




    </div>
  );
}

export default App;
