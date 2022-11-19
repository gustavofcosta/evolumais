import { useInView } from "framer-motion";
import { useRef } from "react";

import { useGlobalContext } from "../../context/appContext";

function WhyUs() {
  const { whyUs } = useGlobalContext();

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);

  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref2, { once: true });

  return (
    <div>
      <div
        ref={ref1}
        id="whyUs"
        className={`w-40 ml-12 mt-8 text-xl leading-8 md:w-60 md:ml-48 md:text-4xl lg:ml-96 transition-all duration-700 ${
          isInView1 ? "translate-x-0 opacity-1" : "-translate-x-full opacity-0"
        }`}
      >
        <h2 className="font-semibold">porque nós?</h2>
      </div>
      <div
        ref={ref2}
        className={`w-1/3 border-b-4 border-gray-600 my-14 transition-all duration-1000 ${
          isInView2 ? " opacity-1" : "-translate-x-full opacity-0"
        }`}
      />
      <ul className="pt-16 px-8 grid gap-8 md:grid-cols-2 md:px-8 lg:grid-cols-3 lg:px-24 lg:gap-12 ">
        {whyUs.map((item) => {
          const { id, name, icon, description } = item;
          return (
            <li
              ref={ref3}
              key={id}
              className={`flex flex-col justify-center items-center border border-slate-300 space-y-8 rounded-3xl shadow-md 
              shadow-secondary_500 bg-backGroundColor transition delay-700 duration-1000
              ${
                isInView3
                  ? "translate-y-0 opacity-1 "
                  : "translate-y-56 opacity-0"
              }`}
            >
              <figure className="h-12 w-12 mt-10  md:h-14 md:w-14">
                <img
                  className="w-full"
                  src={icon}
                  alt={name}
                  height={10}
                  width={10}
                />
              </figure>
              <h3 className="font-semibold md:text-lg">{name}</h3>
              <p className="text-center px-4 pb-12 md:px-20 md:text-lg lg:px-10">
                {description}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default WhyUs;
