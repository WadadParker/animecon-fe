import { Route , Routes } from "react-router-dom"
import LandingPage from "./pages/LandingPage"
import Home from "./pages/Home"
import Payment from "./pages/Payment"

function App() {

  return (
  <div>
    <Routes>
      <Route path="/" element={LandingPage} />
      <Route path="/home" element={Home} />
      <Route path="/payment" element={Payment} />
    </Routes>
    <h1 className="font-ruddy text-3xl font-bold">Ruddy Bold</h1>
    <p className="font-ruddy text-lg italic">Ruddy LightItalic</p>
    <p className="font-ruddy text-base font-normal">Ruddy Regular</p>
    <p className="font-ruddy text-lg font-black">Ruddy Black</p>
  </div>
  )
}

export default App
