import { useInView } from "framer-motion";
import { useRef } from "react";
import { useGlobalContext } from "../../context/appContext";
import DescriptionWeDo from "./DescriptionWeDo";

function WhatWeDo() {
  const { whatWeDo } = useGlobalContext();

  const ref1 = useRef(null);
  const isInView1 = useInView(ref1, { once: true });

  return (
    <div id="whatWeDo" className=" pb-10 md:pb-20">
      <div
        ref={ref1}
        className={`w-56 ml-12  text-xl leading-8 md:w-96 md:ml-48 md:text-3xl transition-all duration-700 ${
          isInView1 ? "translate-x-0 opacity-1" : "-translate-x-full opacity-0"
        }`}
      >
        <h2 className="font-semibold py-16 md:py-24">
          Criamos produtos digitais adaptados ás suas necessidades.
        </h2>
      </div>
      <div className="flex justify-end">
        <section>
          {whatWeDo.map((item) => {
            return <DescriptionWeDo key={item.id} {...item} />;
          })}
        </section>
      </div>
    </div>
  );
}
export default WhatWeDo;
2;
