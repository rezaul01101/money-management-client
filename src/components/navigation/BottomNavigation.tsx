import { RiHome4Fill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";
import { IoIosListBox, IoMdSettings } from "react-icons/io";
import { MdSavings } from "react-icons/md";

const BottomNavigation = () => {
  return (
    <div className="w-full grid grid-cols-5 gap-3 fixed bottom-0 left-0 h-[60px] px-1 bg-theme-yellow-500">
      <div className="flex justify-center items-center flex-col text-theme-red-600">
        <div className="text-xl">
          <RiHome4Fill />
        </div>
        <p className="text-xs">Home</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="text-xl">
          <FaCreditCard />
        </div>
        <p className="text-xs">Account</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="text-xl">
          <IoIosListBox />
        </div>
        <p className="text-xs">Transactions</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="text-xl">
          <MdSavings />
        </div>
        <p className="text-xs">Saving</p>
      </div>
      <div className="flex justify-center items-center flex-col">
        <div className="text-xl">
          <IoMdSettings />
        </div>
        <p className="text-xs">Settings</p>
      </div>
    </div>
  );
};

export default BottomNavigation;
