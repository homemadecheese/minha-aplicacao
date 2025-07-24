import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import OlaMundo from "./Pages/OlaMundo";
import Tabela from "./Pages/Tabela";
import Gato from "./Pages/Gato";

function Layout({ children }) {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center min-vh-100 bg-light">
      {children}
    </div>
  );
}

function Home() {
  return (
    <Layout>
      <OlaMundo />
      <Tabela />
      <Gato />
    </Layout>
  );
}

function App() {
  return (
    <Router basename="/minha-aplicacao">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/OlaMundo" element={<Layout><OlaMundo /></Layout>} />
        <Route path="/Tabela" element={<Layout><Tabela /></Layout>} />
        <Route path="/Gato" element={<Layout><Gato /></Layout>} />
      </Routes>
    </Router>
  );
}

export default App;


