import { BsTwitter, BsDiscord, BsMedium } from "react-icons/bs";
import { BiLogoTelegram } from "react-icons/bi";
import Logo from "../assets/images/Logo.png";
import LanguageDropDown from "../common/LanguageDropDown";

function Footer() {
  return (
    <>
      <div className="bg-black mt-10">
        <div className="max-w-[1024px] px-4 m-auto">
          <div className="grid   grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-10 border-b  border-ebony text-white">
            <div className="flex flex-col text-base font-medium">
              <span className="cursor-pointer">Provability Explained</span>
              <span className="pt-[10px] cursor-pointer">
                Recommended Wallets
              </span>
              <span className="pt-[10px] cursor-pointer">
                Responsible Gambling
              </span>
            </div>
            <div className="flex flex-col text-base font-medium">
              <span className="cursor-pointer">About Us</span>
              <span className="pt-[10px] cursor-pointer">
                Terms & Conditions
              </span>
              <span className="pt-[10px] cursor-pointer">Privacy Policy</span>
              <span className="pt-[10px] cursor-pointer">Aml Policy</span>
            </div>
            <div className="flex flex-col text-base font-medium">
              <span>Follow us</span>
              <div className="flex items-center gap-2 pt-3">
                <div className="border-2 border-white/[0.2] p-3 rounded-full flex">
                  <BsTwitter className=" text-2xl flex cursor-pointer" />
                </div>
                <div className="border-2 border-white/[0.2] p-3 rounded-full flex">
                  <BiLogoTelegram className=" text-2xl flex cursor-pointer" />
                </div>
                <div className="border-2 border-white/[0.2] p-3 rounded-full flex">
                  <BsDiscord className=" text-2xl flex cursor-pointer" />
                </div>
                <div className="border-2 border-white/[0.2] p-3 rounded-full flex">
                  <BsMedium className=" text-2xl flex cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="flex justify-center ">
              <LanguageDropDown />
            </div>
          </div>
          <div className="py-10 border-b  border-ebony">
            <div className="flex justify-center">
              <div className="flex flex-col text-justify">
                <img src={Logo} alt="" />
                <span className="text-comet pt-2 text-xs">
                  © Owl.Games 2021. All Rights Reserved
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
