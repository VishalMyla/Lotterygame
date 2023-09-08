import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from './components/layout'
import Herosection from './components/Herosection'
import History from './components/History'
import LoginModal from './common/LoginModal'
import ReferralProgram from './components/ReferralProgram'
import Profile from './components/Profile'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Herosection />} />
            <Route path='/history' element={<History />} />
            <Route path='/referralprogram' element={<ReferralProgram />} />
            <Route path='/profile' element={<Profile />} />

            {/* <Route path="/login" element={<LoginModal />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App;
