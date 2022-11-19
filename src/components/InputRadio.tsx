interface InputRadioProps {
  value: string;
  onChange: any;
  title: string;
}

const InputRadio = ({ value, onChange, title }: InputRadioProps) => {
  return (
    <div className="flex justify-start items-center p-1 gap-3 px-4 md:px-52 lg:px-[500px]">
      <input
        className="text-center bg-inherit border-b h-4 w-4 focus:outline-none focus:border-b border-primary_500 focus:border-secondary_500 mb-2 text-gray-600"
        type="radio"
        name="firstContact"
        value={value}
        onChange={onChange}
      />
      <label className="text-lg">{title}</label>
    </div>
  );
};
export default InputRadio;
