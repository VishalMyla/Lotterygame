import { useState, useEffect, useContext } from 'react'
import Logo from '../assets/images/logo1.jpg'
import eth from '../assets/images/eth.png'
import DropDown from '../common/DropDown'
import LoginModal from '../common/LoginModal'
import { LotteryContext } from '../contexts/LotteryContext'
import DepositModal from '../common/DepositModal'
import WithdrawModal from '../common/withdrawModal'

function Header() {
  const {
    checkMetamaskInstallation,
    initiateWalletConnection,
    account,
    auth,
    balance,
    getUserName,
    getUserBal,
    depositFunds,
    openModal,
    contract,
  } = useContext(LotteryContext)
  const [isOpen, setIsOpen] = useState(false)

  function closeModal() {
    setIsOpen(false)
  }

  const onClickConnect = async () => {
    const mm = await checkMetamaskInstallation()

    if (mm) {
      await initiateWalletConnection()
    }
  }

  const onDepositClick = async () => {
    openModal()
  }

  const onWithdrawClick = async () => {
    setIsOpen(true)
  }

  useEffect(() => {
    console.log('loaded..', account, auth, balance)
    if (contract) {
      getUserBal()
    }
  }, [account, balance, auth])

  return (
    <>
      <div className='bg-rhino sticky top-0 z-10'>
        <div className='flex justify-between items-center px-16 py-[18px]'>
          <div>
            <a href='/' target='_self'>
              <img src={Logo} alt='Logo' height={60} width={60} />
            </a>
          </div>

          {auth ? (
            <>
              <div className='gap-[15px] flex items-center text-white  '>
                <div className='flex items-center gap-[10px] bg-blue/100 w-[197px] pl-5 rounded-[5px] py-1'>
                  <img src={eth} alt='eth' />
                  <div className='flex flex-col text-base'>
                    <span>{balance}</span>
                    <span className='text-xs text-white/[44%]'>BUSDT</span>
                  </div>
                </div>
                <div>
                  <button
                    className='font-Montserrat text-lg gradient font-semibold px-7 py-[9px]  rounded-[5px] '
                    onClick={onDepositClick}
                  >
                    Deposit
                  </button>
                </div>
                <div>
                  <button
                    className='font-Montserrat text-lg gradient font-semibold px-7 py-[9px]  rounded-[5px] '
                    onClick={onWithdrawClick}
                  >
                    Withdraw
                  </button>
                </div>
              </div>
              <DropDown />
            </>
          ) : (
            <>
              <div className=' flex items-center gap-10 text-white'>
                {/* <div>
                  <button
                    className='font-Montserrat text-base font-semibold'
                    onClick={signupAccount}
                  >
                    Sign up
                  </button>
                </div> */}
                <div>
                  <button
                    className='font-Montserrat text-base gradient font-semibold px-7 py-[3px]  rounded-[10px] '
                    onClick={onClickConnect}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      {!auth && <LoginModal />}
      {auth && <DepositModal />}
      {auth && <WithdrawModal isOpen={isOpen} closeModal={closeModal} />}
    </>
  )
}
export default Header
