import { useState } from "react";
import Logo from "../assets/images/Logo.png";
import eth from "../assets/images/eth.png";
import DropDown from "../common/DropDown";
import LoginModal from "../common/LoginModal";

function Header() {
  let [isOpen, setIsOpen] = useState(false);
  let [isConnected, setIsConnected] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function onCreatAccount() {
    closeModal();
    setIsConnected(true);
  }

  return (
    <>
      <div className="bg-rhino sticky top-0 z-10">
        <div className="flex justify-between items-center px-16 py-[18px]">
          <div>
            <a href="/" target="_self">
              <img src={Logo} alt="Logo" />
            </a>
          </div>

          {isConnected ? (
            <>
              <div className="gap-[10px] flex items-center text-white  ">
                <div className="flex items-center gap-[10px] bg-blue/100 w-[197px] pl-5 rounded-[5px] py-1">
                  <img src={eth} alt="eth" />
                  <div className="flex flex-col text-base">
                    <span>0.00</span>
                    <span className="text-xs text-white/[44%]">BUSD</span>
                  </div>
                </div>
                <div>
                  <button className="font-Montserrat text-lg gradient font-semibold px-7 py-[9px]  rounded-[5px] ">
                    Deposit
                  </button>
                </div>
              </div>
              <DropDown />
            </>
          ) : (
            <>
              <div className=" flex items-center gap-10 text-white">
                <div>
                  <button className="font-Montserrat text-base font-semibold">
                    Sign up
                  </button>
                </div>
                <div>
                  <button
                    className="font-Montserrat text-base gradient font-semibold px-7 py-[3px]  rounded-[10px] "
                    onClick={openModal}
                  >
                    Connect
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>

      <LoginModal
        isOpen={isOpen}
        closeModal={closeModal}
        onCreatAccount={onCreatAccount}
      />
    </>
  );
}
export default Header;
