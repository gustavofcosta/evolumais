import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/appContext";

const Footer = () => {
  const { links, social } = useGlobalContext();

  return (
    <div className="bg-primary_500 border border-primary_500 pb-4 md:pb-2">
      <div className="w-[90%] mx-auto">
        <div className="bg-secondary_500 border-2 border-secondary_500 w-full my-16" />

        <div className="flex justify-between md:mx-10 lg:mx-16">
          <nav className="">
            <ul className="space-y-6 md:space-y-8">
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
                  className="h-8 w-8 md:h-10 md:w-10 hover:transform hover:scale-150 transition-all duration-200  ml-6 md:ml-16"
                  key={id}
                >
                  <a href={url} target="_blank" rel="noopener noreferrer">
                    <img src={icon} alt={name} height={25} width={25} />
                  </a>
                </li>
              );
            })}
          </ul>
          <div className="space-y-8 ">
            <p className="p-2  md:px-4 text-sm md:text-lg lg:text-xl bg-secondary_500 rounded-lg text-center">
              Evolução
            </p>
            <p className="p-2  md:px-4 text-sm md:text-lg lg:text-xl bg-secondary_500 rounded-lg text-center ">
              Renovação
            </p>
            <p className="p-2  md:px-4 text-sm md:text-lg lg:text-xl bg-secondary_500 rounded-lg text-center ">
              Inovação
            </p>
            <figure className="h-20 w-20 lg:h-40 lg:w-40">
              <img
                className="w-full"
                src="/images/logo-footer.svg"
                alt="Logo"
                height={25}
                width={25}
              />
            </figure>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mt-12">
        <p className="text-center text-white text-sm md:text-base">
          Copyright © 2022 Evolumais Inc. Todos os direitos reservados.
        </p>
      </div>
    </div>
  );
};
export default Footer;
