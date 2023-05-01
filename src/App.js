import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dubs from './components/dubs';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/dubs" element={ < Dubs /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
