import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LoginPubg from "../assets/images/LoginPubg.png";
import LoginLogo from "../assets/images/LoginLogo.png";

function LoginModal({ isOpen, closeModal, onCreatAccount }) {
  return (
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
            <div className="fixed inset-0  bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="  transform  bg-rhino rounded-[20px]  text-left align-middle shadow-xl transition-all">
                  <div className="flex md:w-[1100px] lg:w-[1200px]">
                    <div className="w-[476px] bg-white/[5%] rounded-l-[20px] flex items-center">
                      <img
                        src={LoginPubg}
                        alt="LoginPubg"
                        className="w-[512px] h-[512px]"
                      />
                    </div>
                    <div>
                      <div className="flex justify-center pt-24 ">
                        <img src={LoginLogo} alt="" />
                      </div>
                      <div className="w-[770px] flex flex-col items-center pt-24   justify-center">
                        <div className="text-white font-bold text-[22px] ">
                          <label className="flex items-center gap-2">
                            Nickname
                            <span className="text-manatee font-medium text-xs">
                              (Can be changed later)
                            </span>
                          </label>
                          <input className="rounded-[5px] p-2 bg-alto/[13%] w-[437px] h-[50px]  focus:outline-none" />
                        </div>
                        <div className="mt-14  gradient rounded-[5px]">
                          <button
                            className="px-[122px] py-2 text-2xl font-semibold text-white"
                            onClick={onCreatAccount}
                          >
                            Create Account
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
export default LoginModal;
