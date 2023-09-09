import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Header from './Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { LotteryContext } from '../contexts/LotteryContext'
import Loader from '../common/Loader'

const Layout = () => {
  const { loading } = useContext(LotteryContext)
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Header />
          <Outlet />
          <Footer />
          <ToastContainer
            position='top-right'
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme='dark'
          />
        </>
      )}
    </>
  )
}

export default Layout
