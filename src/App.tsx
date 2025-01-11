import { Routes,Route } from 'react-router-dom';
import './App.css';
import HomePage from './pages/home-page';





function App() {
  return (
    <div>
      <Routes>
        <Route index element={<HomePage />}/>
      </Routes>
    </div>
    
  );
}

export default App;
