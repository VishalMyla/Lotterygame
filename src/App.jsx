import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from './components/layout'
import Herosection from './components/Herosection'
import History from './components/History'
import LoginModal from './common/LoginModal'
import ReferralProgram from './components/ReferralProgram'
import Profile from './components/Profile'
import PrivateRoute from './components/PrivateRoute'
import { useContext, useEffect } from 'react'
import { LotteryContext } from './contexts/LotteryContext'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Herosection />} />
            <Route
              path='/history'
              element={
                <PrivateRoute>
                  <History />
                </PrivateRoute>
              }
            />
            <Route
              path='/referralprogram'
              element={
                <PrivateRoute>
                  <ReferralProgram />
                </PrivateRoute>
              }
            />
            <Route
              path='/profile'
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
