import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './screens/Home1';
import Login from './screens/Login';
import Sign from './screens/Sign';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/sign" element={<Sign />} /> {/* Updated path */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
