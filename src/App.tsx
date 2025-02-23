import Home from "./pages/Home"
import LandingPage from "./pages/LandingPage"

import { Payment } from "./pages/Payment"
import Layout from "./Layout"

function App() {
  return (
    <div className="bg-black h-screen font-ruddy">
      <h1 className="text-white text-3xl">Hello world</h1>
      {/* <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/payment" element={<Payment amount={1200} />} />
        <Route path="/home" element={<Layout />} >
          <Route index element={<Home />} />
        </Route>
      </Routes> */}
    </div>
  )
}

export default App
