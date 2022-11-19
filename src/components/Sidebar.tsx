import { X } from "phosphor-react";

import { useGlobalContext } from "../context/appContext";

const Sidebar = () => {
  const { social, links, isSidebarOpen, toggleSidebar } = useGlobalContext();

  return (
    <aside
      className={`fixed w-full h-full z-50 top-0  right-0 bg-primary_500 lg:w-[480px] shadow-lg shadow-slate-800 ease-in-out duration-300  ${
        isSidebarOpen ? "translate-x-0" : "translate-x-full"
      } `}
    >
      <div className="p-8 lg:p-10 ">
        <div className="flex justify-between">
          <nav>
            <ul className="space-y-8 md:space-y-6">
              {links.map((link) => {
                const { id, url, name } = link;
                return (
                  <li key={id} onClick={toggleSidebar}>
                    <a
                      className="text-white font-medium text-lg md:text-2xl hover:text-secondary_500 transition-all duration-500 hover:text-xl md:hover:text-3xl"
                      href={url}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              <li
                onClick={toggleSidebar}
                className="text-white font-medium text-lg md:text-2xl hover:text-secondary_500 transition-all duration-500 hover:text-xl md:hover:text-3xl"
              >
                <a href="/contact">Contato</a>
              </li>
              {/*<li
                onClick={toggleSidebar}
                className="text-white font-medium text-lg md:text-2xl hover:text-secondary_500 transition-all duration-500 hover:text-xl md:hover:text-3xl"
              >
                <a href="/budget">Orçamento</a>
              </li> */}
            </ul>
          </nav>
          <figure>
            <button className="h-8 w-8 hover:transform hover:scale-150 text-secondary_500 hover:text-secondary_400 transition-all duration-200">
              <X size={28} onClick={toggleSidebar} />
            </button>
          </figure>
        </div>
        <ul className="w-full absolute bottom-10 flex justify-center items-center space-x-8 md:space-x-10">
          {social.map((item) => {
            const { id, icon, url, name } = item;
            return (
              <li
                className="h-8 w-8 hover:transform hover:scale-150 transition-all duration-200"
                key={id}
              >
                <a
                  className=""
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={icon} alt={name} height={25} width={25} />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
