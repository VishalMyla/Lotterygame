import { useContext, useEffect, useState } from 'react'
import bingo from '../assets/images/bingo.png'
import lottery from '../assets/images/lottery.png'
import CarousalSlider from '../common/CarousalSlider'
import GameModal from '../common/GameModal'
import { LotteryContext } from '../contexts/LotteryContext'
import { toast } from 'react-toastify'

const GamesData = [
  {
    image: lottery,
    heading: 'Lottery',
    title: 'Original',
  },
]
function Herosection() {
  let [isOpen, setIsOpen] = useState(false)
  const { auth } = useContext(LotteryContext)

  function closeModal() {
    setIsOpen(false)
  }

  function openModal() {
    if (auth) {
      setIsOpen(true)
    } else {
      toast('Authenticate to Play Games')
    }
  }

  useEffect(() => {
    console.log('loaded auth', auth)
  }, [auth])

  return (
    <>
      <div className='max-w-[1024px] px-4 m-auto text-white '>
        <CarousalSlider />
        <div className='mt-16'>
          <h1 className='text-3xl'>Available Games</h1>
          <div className='pt-11'>
            <div className='grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4'>
              {GamesData.map((value, id) => {
                return (
                  <>
                    <div
                      className=' rounded-[15px] cursor-pointer bg-rhino'
                      key={id}
                      onClick={openModal}
                    >
                      <img
                        src={value.image}
                        alt=''
                        className=' w-[100%] lg:w-72'
                      />
                      <div className='flex flex-col  items-center py-[5px]'>
                        <span className='text-lg font-semibold'>
                          {value.heading}
                        </span>
                        <span className='text-xs text-sky font-medium'>
                          {value.title}
                        </span>
                      </div>
                    </div>
                  </>
                )
              })}
            </div>
          </div>
        </div>
      </div>
      <GameModal isOpen={isOpen} closeModal={closeModal} />
    </>
  )
}
export default Herosection
