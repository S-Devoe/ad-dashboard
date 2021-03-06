import { AiOutlineMenu } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BsChatLeft } from "react-icons/bs";
import { RiNotification3Line } from "react-icons/ri";
import { MdKeyboardArrowDown } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import avatar from "../data/avatar.jpg";
import { useStateContext } from "../contexts/ContextProvider";
import { Chat, Cart, UserProfile, Notification } from "./index";
import { useEffect } from "react";

// Local Button Component

const NavButton = ({ title, customFunc, icon, color, dotColor }) => {
  return (
    <TooltipComponent content={title} position="BottomCenter">
      <button
        type="button"
        onClick={customFunc}
        style={{ color }}
        className=" relative text-xl rounded-full p-3 hover:bg-light-gray "
      >
        <span
          style={{ background: dotColor }}
          className=" absolute inline-flex rounded-full h-2 w-2 right-2 top-2 "
        ></span>
        {icon}
      </button>
    </TooltipComponent>
  );
};

const Navbar = () => {
  const {
    activeMenu,
    setActiveMenu,
    isClicked,
    setIsClicked,
    handleClick,
    screenSize,
    setScreenSize,
    currentColor
  } = useStateContext();

  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    handleResize()
    // whenever you use addEventListener in react always remember to remove it 
    window.removeEventListener("resize", handleResize);

  }, [setScreenSize]);


  useEffect(() => {
    if(screenSize <= 900){
      setActiveMenu(false)
    } else{
     setActiveMenu(true) 
    }


  },[screenSize, setActiveMenu])

  return (
    <nav className="flex justify-between p-2 md:mx-6 relative ">
      <NavButton
        title="Menu"
        customFunc={() => setActiveMenu((prev) => !prev)}
        color={currentColor}
        icon={<AiOutlineMenu />}
      />
      <div className="flex">
        <NavButton
          title="Cart"
          customFunc={() => handleClick("cart")}
          color={currentColor}
          icon={<FiShoppingCart />}
        />
        <NavButton
          title="Chat"
          dotColor={`#03c9d7`}
          customFunc={() => handleClick("chat")}
          color={currentColor}
          icon={<BsChatLeft />}
        />
        <NavButton
          title="Notification"
          dotColor={`#03c9d7`}
          customFunc={() => handleClick("notification")}
          color={currentColor}
          icon={<RiNotification3Line />}
        />
        <TooltipComponent content="Profile" position="BottomCenter">
          <div
            className=" flex items-center gap-2 cursor-pointer p-1
          hover:bg-light-gray rounded-lg
          "
            onClick={() => handleClick("userProfile")}
          >
            <img
              src={avatar}
              alt="user profile"
              className="rounded-full h-8 w-8 "
            />
            <p>
              <span className=" text-gray-400 text-14 ">Hi,</span>
              <span className=" text-gray-400 font-bold ml-1 text-14 ">
                DeeVoe
              </span>
            </p>
            <MdKeyboardArrowDown className="text-14 text-gray-400" />
          </div>
        </TooltipComponent>
        {isClicked.chat && <Chat />}
        {isClicked.cart && <Cart setIsClicked={setIsClicked} />}
        {isClicked.notification && <Notification />}
        {isClicked.userProfile && <UserProfile />}
      </div>
    </nav>
  );
};
export default Navbar;
