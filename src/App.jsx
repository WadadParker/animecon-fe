import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";
import Payment from "./pages/Payment";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/payment" element={<Payment setShowSuperModal={true} />} />
      </Routes>
    </div>
  );
}

export default App;
