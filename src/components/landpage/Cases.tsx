import { CaretDoubleLeft, CaretDoubleRight } from "phosphor-react";

const Cases = () => {
  return (
    <div id="cases" className="relative bg-bgGray min-h-[380px]">
      <div className="absolute left-0 z-10 h-full flex items-center ml-6 lg:ml-14 ">
        <CaretDoubleLeft
          className="h-10 w-10 lg:h-16 lg:w-16 cursor-pointer hover:text-secondary_500 transition duration-200 animate-pulse"
          weight="light"
        />
      </div>
      <div className="absolute right-0 z-10 h-full flex items-center mr-6 lg:mr-14">
        <CaretDoubleRight
          className="h-10 w-10 lg:h-16 lg:w-16 cursor-pointer hover:text-secondary_500 transition duration-200 animate-pulse"
          weight="light"
        />
      </div>
      <div className="">
        {/* logica Cases*/}
        <figure>
          <img
            className=" w-full"
            src="/images/projeto-petshop-auqmia.svg"
            alt="Projeto 1"
            height={20}
            width={20}
          />
        </figure>
      </div>
      <div className="absolute z-10  right-5 md:bottom-20 md:right-24">
        <button className=" text-sm p-2 px-4 font-bold uppercase rounded-full bg-secondary_500 hover:bg-secondary_400  transition duration-200 md:text-lg md:px-4 md:p-2  lg:text-lg lg:px-6 lg:p-2">
          Ver todos
        </button>
      </div>
    </div>
  );
};

export default Cases;
