import { Link, NavLink } from "react-router-dom";
import { SiShopware } from "react-icons/si";
import { MdOutlineCancel } from "react-icons/md";
import { TooltipComponent } from "@syncfusion/ej2-react-popups";
import { links } from "../data/dummy";
import { useStateContext } from "../contexts/ContextProvider";

const Sidebar = () => {
  const {activeMenu, setActiveMenu, screenSize, currentColor} = useStateContext()
  // console.log(activeMenu)
  
  const handleCloseSideBar = () => {
    if(activeMenu && screenSize <= 900){
      setActiveMenu(false)
    }
  }

  const activeLinks =
    " flex items-center gap-5 pl-4 pb-2.5 pt-3 rounded-lg text-white text-md m-2";

  const normalLinks =
    " flex items-center gap-5 pb-2.5 pl-4 pt-3 rounded-lg text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2 ";

  return (
    <section
      className=" ml-3 h-screen md:overflow-hidden overflow-auto 
    md:hover:overflow-auto pb:10 
    "
    >
      {activeMenu && (
        <>
          {/* Logo and mobile cancel button  */}
          <div className="  flex justify-between items-center">
            <Link
              to="/"
              onClick={ handleCloseSideBar}
              className="items-center flex gap-3 ml-3 mt-4 text-xl 
              font-extrabold tracking-tight text-slate-900 dark:text-white"
            >
              <SiShopware /> <span>Shoppy</span>
            </Link>
            <TooltipComponent content="Menu" position="BottomCenter">
              <button
                type="button"
                className="block text-xl rounded-full p-3 hover:bg-light-gray mt-4 md:hidden "
                onClick={() => {setActiveMenu((prev) => !prev)}}
              >
                <MdOutlineCancel />
              </button>
            </TooltipComponent>
          </div>

          {/* main links  */}
          <div className="">
            {links.map((item) => (
              <div key={item.title}>
                <p className="text-gray-400 m-3 mt-4 uppercase">{item.title}</p>
                {item.links.map((link) => (
                  <NavLink
                    to={`/${link.name}`}
                    key={link.name}
                    style={({isActive}) => ({backgroundColor: isActive ? currentColor : ''}) }
                    onClick={handleCloseSideBar}
                    className={({ isActive }) =>
                      isActive ? activeLinks : normalLinks
                    }
                  >
                    {link.icon}
                    <span className="capitalize">{link.name}</span>
                  </NavLink>
                ))}
              </div>
            ))}
          </div>
        </>
      )}
    </section>
  );
};
export default Sidebar;
