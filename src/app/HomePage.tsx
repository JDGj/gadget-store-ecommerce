import Link from "next/link";
import { PiArrowDownRightLight } from "react-icons/pi";
import { CiInstagram, CiMail, CiFacebook, CiLinkedin } from "react-icons/ci";

const HomePage = () => {
  return (
    <>
      <div className="md:px-10 px-5 lg:px-16 h-[75vh] flex align-middle">
        {/* Ball element */}
        <div className="rounded-ball"></div>

        {/* Main content */}
        <div className="z-20 grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-4 justify-items-center items-center">
          <div className="flex justify-center flex-col">
            <h1 className="text-[#252525] font-bold text-3xl lg:text-4xl pb-4 md:pb-6">
              Find Your <span className="text-[#363062]">Gadget </span>
              with worthy price in the market
            </h1>
            <p className="text-[#383838] text-sm md:text-md lg:text-lg font-light pb-6">
              Our store is the best in the market, with over 20+ years of
              experience and over 50 000+ clients satisfied. We also have
              various quality awards, and for five consecutive years, we've been
              considered the best gadget store!
            </p>
            <Link href={"/"}>
              <div className="p-2 md:p-4 text-md lg:text-lg w-full md:w-52 lg:w-60 rounded-full bg-[#363062] text-white flex justify-center">
                <span className="flex flex-row space-x-2 h-full">
                  Our Products
                  <PiArrowDownRightLight className="w-6 h-6 pt-1" />
                </span>
              </div>
            </Link>
          </div>
          <img
            src="/home.png"
            alt="Home Image"
            className="w-72 md:w-80 lg:w-96 xl:w-[75%] h-auto transition-transform duration-300 ease-in-out transform hover:translate-x-2 hover:translate-y-2"
          />
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-4 px-10 items-center pt-10">
        <h1 className="font-bold pr-2">Or contact us on:</h1>
        <Link href="/instagram" className="w-full sm:w-auto">
          <div className="border border-[#363062] bg-[#d6d5de50] rounded-full flex justify-center align-middle px-3 py-2">
            <CiInstagram className="w-5 h-5 flex justify-center align-middle pt-1" />
            Instagram
          </div>
        </Link>
        <Link href="/gmail" className="w-full sm:w-auto">
          <div className="border border-[#363062] bg-[#d6d5de50] rounded-full flex justify-center align-middle px-3 py-2">
            <CiMail className="w-5 h-5 flex justify-center align-middle pt-1" />{" "}
            Gmail
          </div>
        </Link>
        <Link href="/facebook" className="w-full sm:w-auto">
          <div className="border border-[#363062] bg-[#d6d5de50] rounded-full flex justify-center align-middle px-3 py-2">
            <CiFacebook className="w-5 h-5 flex justify-center align-middle pt-1" />
            Facebook
          </div>
        </Link>
        <Link href="/linkedin" className="w-full sm:w-auto">
          <div className="border border-[#363062] bg-[#d6d5de50] rounded-full flex justify-center align-middle px-3 py-2">
            <CiLinkedin className="w-5 h-5 flex justify-center align-middle pt-1" />
            Linkedin
          </div>
        </Link>
      </div>
    </>
  );
};

export default HomePage;
