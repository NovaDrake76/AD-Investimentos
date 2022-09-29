import "./App.css";
import Footer from "./components/footer";
import Landing from "./pages/landing/landing";
import Account from "./pages/openAccount/account";

import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="conta" element={<Account />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
