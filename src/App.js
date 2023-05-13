import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dubs from './components/dubs';
import Login from './components/login';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dubs" element={ < Dubs /> } />
          <Route path="/login" element={ < Login /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
