import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import AnimatedNumbers from "react-animated-numbers";
import LossModal from "../common/LossModal";
import WonModal from "../common/WonModal";

function GameModal({ isOpen, closeModal }) {
  const [inputamount, setInputAmount] = useState(null);
  const [num, setNum] = useState(0);
  const [inputnumber, setInputNumber] = useState(null);
  const [shownumber, setShowNumber] = useState(false);
  const [lossmodal, setLossModal] = useState(false);
  const [wonmodal, SetWonModal] = useState(false);

  const handleInputamount = (e) => {
    const newamounts = e.target.value;
    setShowNumber(false);
    if (/^\d{0,3}$/.test(newamounts)) {
      setInputAmount(newamounts);
    }
  };

  const handleInputnumber = (e) => {
    setShowNumber(false);
    const newnumbers = e.target.value;
    if (/^\d{0,3}$/.test(newnumbers)) {
      setInputNumber(newnumbers);
    }
  };

  const randomNumberInRange = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const handleClick = () => {
    setShowNumber(true);
    setNum(randomNumberInRange(1, 999));
    if (inputnumber === num) {
      setLossModal(false);
      setTimeout(() => {
        SetWonModal(true);
        setInputAmount("");
        setInputNumber("");
      }, 5500);
    } else {
      setTimeout(() => {
        setLossModal(true);
        setInputAmount("");
        setInputNumber("");
      }, 5500);
      SetWonModal(false);
    }
  };
  const LossModalClose = () => {
    setLossModal(false);
    setShowNumber(false);
  };

  const WonModalModal = () => {
    SetWonModal(false);
    setShowNumber(false);
  };

  return (
    <>
      <div>
        <Transition appear show={isOpen} as={Fragment}>
          <Dialog as="div" className="relative z-10" onClose={closeModal}>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <div className="fixed inset-0 bg-black bg-opacity-25" />
            </Transition.Child>

            <div className="fixed inset-0 overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4 text-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 scale-95"
                  enterTo="opacity-100 scale-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 scale-100"
                  leaveTo="opacity-0 scale-95"
                >
                  <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-rhino p-2 text-left align-middle shadow-xl transition-all text-white">
                    <div className="flex flex-col items-center justify-evenly py-5 ">
                      <div className="py-5 flex flex-col text-justify">
                        <label className="font-bold text-xs md:text-sm">
                          Amount
                        </label>
                        <input
                          placeholder="Amount"
                          type="number"
                          value={inputamount}
                          onChange={handleInputamount}
                          className="focus:outline-none p-2 md:w-[20rem]  bg-white/[13%] h-9 rounded-[5px]"
                        />
                      </div>
                      <div className="flex flex-col text-justify">
                        <label className="font-bold text-xs md:text-sm">
                          Number
                        </label>
                        <input
                          placeholder="Number"
                          type="number"
                          value={inputnumber}
                          onChange={handleInputnumber}
                          className="focus:outline-none p-2 bg-white/[13%] md:w-[20rem] h-9 rounded-[5px]"
                        />
                      </div>
                    </div>

                    <div className="flex justify-center py-2">
                      <button
                        className="gradient font-semibold text-xl px-3 py-2 md:w-[20rem] rounded-[5px]"
                        onClick={handleClick}
                        disabled={!inputamount || !inputnumber}
                      >
                        Submit
                      </button>
                    </div>
                    <div className="mt-5">
                      {shownumber && (
                        <>
                          <div className="flex justify-center rounded-[5px] border w-32 m-auto h-fit">
                            <AnimatedNumbers
                              animateToNumber={num}
                              fontStyle={{ fontSize: 32 }}
                              locale="en-US"
                              configs={[
                                { mass: 1, tension: 220, friction: 100 },
                                { mass: 1, tension: 180, friction: 130 },
                                { mass: 1, tension: 280, friction: 90 },
                                { mass: 1, tension: 180, friction: 135 },
                                { mass: 1, tension: 260, friction: 100 },
                                { mass: 1, tension: 210, friction: 180 },
                              ]}
                            />
                          </div>
                        </>
                      )}
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
      {lossmodal && <LossModal Wonopen={lossmodal} Wonclose={LossModalClose} />}
      {wonmodal && <WonModal open={wonmodal} close={WonModalModal} />}
    </>
  );
}
export default GameModal;