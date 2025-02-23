import { Route , Routes } from "react-router"
import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"

import { Payment } from "./pages/Payment"
import Layout from "./Layout"
import Signup from "./pages/Signup"

function App() {
  return (
    <div className="bg-black h-screen font-ruddy">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<Payment amount={1200} />} />
        <Route path="/home" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  )
}

export default App
