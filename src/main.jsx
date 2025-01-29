import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes,Route } from "react-router";
import App from './App.jsx'
import Docs from './pages/Docs.jsx';
import   './index.css';
import Dashboard from './pages/dashboard.jsx';


createRoot(document.getElementById('root')).render(
  <StrictMode>
   <BrowserRouter>
   <Routes>
      <Route path="/" element={<App />} />
      <Route path="/Docs" element={<Docs />} />
      <Route path="/dashboard" element={<Dashboard />} />


    </Routes>
 </BrowserRouter>

  </StrictMode>,
)
