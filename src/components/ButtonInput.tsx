import { ArrowRight } from "phosphor-react";

const ButtonInput = () => {
  return (
    <div className="py-4 w-80 flex justify-end">
      <button
        type="submit"
        className="group flex gap-2 justify-center items-center text-primary_500 "
      >
        proximo{" "}
        <ArrowRight className="h-4 w-4  transform group-hover:translate-x-4 transition ease-in-out duration-300" />
      </button>
    </div>
  );
};
export default ButtonInput;
