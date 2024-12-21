import { Route , Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import Payment from "./pages/Payment"

function App() {

  return (
  <div>
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/payment" element={<Payment />} />
    </Routes>
  </div>
  )
}

export default App
