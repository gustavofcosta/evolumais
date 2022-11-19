import { Minus, Plus } from "phosphor-react";

import { useState } from "react";

const DescriptionWeDo = ({
  name,
  description,
}: {
  name: string;
  description: string;
}) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <article className="flex justify-end flex-col  pr-16 md:my-2 md:pr-12 lg:my-4 lg:pr-44">
      <div className="flex justify-end gap-4">
        <h4 className="text-base text-left md:text-2xl lg:text-3xl tracking-wide ">
          {name}
        </h4>
        <button onClick={() => setShowInfo(!showInfo)}>
          {showInfo ? (
            <Minus className="text-2xl md:text-3xl text-secondary_500" />
          ) : (
            <Plus className="text-2xl md:text-3xl text-secondary_500" />
          )}
        </button>
      </div>
      <p
        className={`py-4 w-72 text-gray-500 text-left text-sm tracking-wide leading-5 md:w-96 lg:w-[650px] md:tracking-wider ease-linear duration-300  ${
          showInfo
            ? "opacity-1 text-sm md:text-xl lg:text-2xl"
            : "text-[0] opacity-0"
        }`}
      >
        {description}
      </p>
    </article>
  );
};
export default DescriptionWeDo;
