import LoginPage from './page/LoginPage'
import RegisterPage from './page/RegisterPage'
import { Routes, Route, Navigate, } from "react-router-dom"
import Home from './page/Home';
import Nopage from './page/Nopage';
import { BrowserRouter } from "react-router-dom";
export default function App() {
  return (
    <div>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Navigate replace to="/perfx" />} />
          <Route path="/perfx/*" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<RegisterPage />} />
          <Route path="*" element={<Nopage />} />
        </Routes>

      </BrowserRouter>
    </div>
  )
}