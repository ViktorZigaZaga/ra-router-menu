import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import HomePage from './components/HomePage'
import ForzaPage from './components/ForzaPage'
import DriftPage from './components/DriftPage'
import TimeAttackPage from './components/TimeAttackPage'
import Page404 from './components/Page404'
import Menu from './components/Menu'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes className="page">
        <Route path="/" element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App