import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Herosection from "./components/Herosection";
import History from "./components/History";
import LoginModal from "./common/LoginModal";

function App() {
  return (
    <>
      <div>
        <Header />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Herosection />} />
            <Route path="/history" element={<History />} />
            {/* <Route path="/login" element={<LoginModal />} /> */}
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
