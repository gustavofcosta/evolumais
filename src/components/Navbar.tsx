import Sidebar from "../components/Sidebar";
import { useGlobalContext } from "../context/appContext";

const Navbar = () => {
  const { isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <div>
      <div className="fixed mt-4 mr-3 lg:mt-8 lg:mr-5 right-0 z-30 ">
        <button className="h-12 w-12">
          <img
            src="/images/menu.svg"
            alt="Menu"
            height={15}
            width={15}
            onClick={toggleSidebar}
          />
        </button>
      </div>

      <Sidebar />
    </div>
  );
};
export default Navbar;
