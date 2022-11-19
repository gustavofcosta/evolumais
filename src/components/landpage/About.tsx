import { useInView } from "framer-motion";
import {  useRef } from "react";

const About = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);


  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });


  return (
    <div>
      <div
        ref={ref1}
        id="about"
        className={`w-40 ml-12 mt-24 text-xl font-bold leading-8 lg:mt-52 md:w-60 md:ml-48 md:text-4xl lg:ml-96 transition-all duration-700 ${
          isInView1 ? "translate-x-0 opacity-1" : "-translate-x-full opacity-0"
        }`}
      >
        <h1>SOMOS O STUDIO DIGITAL DO FUTURO</h1>
      </div>
      <div 
          ref={ref2}
          className={`w-1/3 border-b-4 border-gray-600 my-14 transition-all duration-1000 transition-all duration-1000 ${
            isInView2 ? "translate-x-0 opacity-1" : "-translate-x-full opacity-0"}`} />
      <div
        
        className="w-full flex justify-end "
      >
        <p
          className="w-40 mr-10 text-sm tracking-wide leading-4 md:w-72 md:text-xl md:mr-24 lg:w-96 lg:text-2xl lg:mr-56 
          "
        >
          Buscamos criar um plano de comunicação consistente com os melhores
          resultados pensados estrategicamente para que possamos transmitir uma
          mensagem ou ideia que realmente ajude no objetivo de cada projeto.
        </p>
      </div>
      <div
        className="flex-1 m-2 my-14 transition-all duration-1000"
      >
        <p className="text-base p-8 text-center font-semibold md:text-xl lg:text-2xl tracking-wide">
          Temos como propósito a evolução, renovação e inovação.
        </p>
      </div>
      <div
       
        className="w-full flex justify-start mb-12 transition-all duration-1000 "
      >
        <p className="w-40 ml-10 text-sm tracking-wide leading-4 md:w-72 md:text-xl md:ml-24 lg:w-96 lg:text-2xl lg:ml-56">
          Contudo, para que isso aconteça e seja desenvolvido precisamos ter em
          mente nossos valores e um deles é a união entre cada parte da equipe
          Evolumais.
        </p>
      </div>
    </div>
  );
};
export default About;
