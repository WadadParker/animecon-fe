import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"
import { Payment } from "./pages/Payment"

function App() {
  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment amount={1200} />} />
      </Routes>
    </div>
  )
}

export default App
