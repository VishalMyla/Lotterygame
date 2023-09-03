import { Dialog, Transition } from "@headlessui/react";
import { Fragment } from "react";
import LoginPubg from "../assets/images/LoginPubg.png";
import LoginLogo from "../assets/images/LoginLogo.png";

function LoginModal({ isOpen, closeModal, onCreatAccount }) {
  return (
    <div className="container mx-auto ">
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
            <div className="flex px-4 min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className=" w-[100%] lg:w-fit  transform  bg-rhino rounded-[20px]  text-left align-middle shadow-xl transition-all">
                  <div className="flex justify-center items-center px-2 ">
                    <div className="lg:w-[512px] md:w-[400px]  hidden md:block">
                      <img
                        src={LoginPubg}
                        alt="LoginPubg"
                        className="  md:h-[400px] lg:h-[512px]"
                      />
                    </div>
                    <div className="w-[512px]">
                      <div className="  flex justify-center">
                        <img
                          src={LoginLogo}
                          alt=""
                          className="w-52 md:w-fit py-5"
                        />
                      </div>
                      <div className="flex flex-col items-center ">
                        <div className="text-white font-bold md:text-[22px] ">
                          <label className="flex items-center gap-2">
                            Nickname
                            <span className="text-manatee font-medium text-xs">
                              (Can be changed later)
                            </span>
                          </label>
                          <input className="rounded-[5px] p-2 bg-alto/[13%] w-full  h-[45px]  focus:outline-none" />
                        </div>
                        <div className="my-5 md:my-14 gradient rounded-[5px]">
                          <button
                            className=" px-5  py-2 text-2xl font-semibold text-white"
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
