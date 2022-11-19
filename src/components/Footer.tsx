import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const Footer = () => {
  const { links, social } = useGlobalContext();

  return (
    <div className="relative flex justify-center h-96">
      <video
        autoPlay
        muted
        loop
        className="w-full h-full object-cover"
        src="/video/bg-video.mp4"
      />
      <div className="absolute top-0 w-[90%] mx-auto pt-10">
        <div className="flex justify-between ">
          <nav className="">
            <ul className="space-y-4">
              {links.map((link) => {
                const { id, url, name } = link;
                return (
                  <li key={id}>
                    <a
                      className="text-white font-bold text-sm md:text-lg lg:text-xl hover:text-secondary_500 transition-all duration-500"
                      href={url}
                    >
                      {name}
                    </a>
                  </li>
                );
              })}
              <li className="text-white font-bold text-sm md:text-lg lg:text-xl hover:text-secondary_500 transition-all duration-500">
                <Link to="/contact">Contato</Link>
              </li>
              {/* <li className="text-white font-bold text-sm md:text-lg lg:text-xl hover:text-secondary_500 transition-all duration-500">
                <a href="/budget">Orçamento</a>
            </li> */}
            </ul>
          </nav>
          <ul className="space-y-8 md:space-y-10 text-sm md:text-lg lg:text-xl ">
            {social.map((item) => {
              const { id, icon, url, name } = item;
              return (
                <li
                  className="h-8 w-8 md:h-10 md:w-10   ml-6 md:ml-16"
                  key={id}
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img
                      className=""
                      src={icon}
                      alt={name}
                      height={25}
                      width={25}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="space-y-6 ">
            <p className="p-1  md:px-4 text-sm md:text-lg lg:text-xl bg-secondary_500 rounded-lg text-center">
              Evolução
            </p>
            <p className="p-1  md:px-4 text-sm md:text-lg lg:text-xl bg-secondary_500 rounded-lg text-center ">
              Renovação
            </p>
            <p className="p-1  md:px-4 text-sm md:text-lg lg:text-xl bg-secondary_500 rounded-lg text-center ">
              Inovação
            </p>
            <figure className="h-24 w-24 pt-2">
              <a href="#home">
                <img
                  className="w-full"
                  src="/images/logo-footer.svg"
                  alt="Logo"
                />
              </a>
            </figure>
          </div>
        </div>
        <div className="flex justify-center items-center mt-8">
          <p className="text-center text-white text-sm md:text-base">
            Copyright © 2022 Evolumais Inc. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
