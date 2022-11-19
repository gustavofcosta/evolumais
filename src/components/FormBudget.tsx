import { useForm } from "react-hook-form";

interface FormBudgetProps {
  first?: boolean;
  onSubmit: any;
  children: string;
  type: string;
  value?: string;
  onChange?: any;
}

const FormBudget = ({
  first,
  onSubmit,
  children,
  type,
  value,
  onChange,
}: FormBudgetProps) => {
  const { register, handleSubmit } = useForm();

  return (
    <form onSubmit={onSubmit}>
      <h2
        className={`${
          first ? "text-2xl md:text-3xl" : "text-base md:text-lg mb-4"
        } `}
      >
        {children}
      </h2>
      <input
        className={
          "ext-center bg-inherit border-b h-10 w-80 lg:h-14 focus:outline-none focus:border-b border-primary_500 focus:border-secondary_500 mb-2 text-gray-600 text-center"
        }
        type={type}
        value={value}
        onChange={onChange}
      />
      <div className='className="w-full flex justify-end items-center mt-24 md:mb-4 md:pr-10'>
        {/*<button className="text-primary_500">anterior </button>
        <span className="h-[0.15rem] w-12 bg-primary_500 rotate-90"></span>*/}
        <button type="submit" className="text-primary_500">
          proximo
        </button>
      </div>
    </form>
  );
};
export default FormBudget;
