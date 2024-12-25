import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import { Payment } from "./pages/Payment"
import Sidebar from "./components/Sidebar"

function App() {
  return (
    <div className="bg-black h-screen font-ruddy flex">
      <Sidebar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<Payment amount={1200} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default App
