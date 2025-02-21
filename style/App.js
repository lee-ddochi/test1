import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './com/Nav';
import Head from './com/Head';
import Home from './pages/Home';
import Top from './pages/Top';
import Bot from './pages/Bot';
import Sho from './pages/Sho';
import Ve from './pages/Ve';

function App() {
  return (
    <Router basename="/">
      <div className="App">
        <Head />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Top" element={<Top />} />
          <Route path="/Bot" element={<Bot />} />
          <Route path="/Sho" element={<Sho />} />
          <Route path="/Ve" element={<Ve />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
