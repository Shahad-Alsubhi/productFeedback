import { useState } from "react";

const Dropdown = ({
  options,
  lable,
  customStyle,
  onSelect,
}: {
  options: string[];
  lable?: string;
  customStyle?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  onSelect: (selected: any) => void;
}) => {
  const [selected, setIsSelected] = useState(options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const handleSelect = (option: string) => {
    setIsSelected(option);
    setIsOpen(false);
    onSelect(option)
  };
  return (
    <div
      tabIndex={0}
      className={`relative cursor-pointer md:w-64 text-sm ${customStyle}`}
      onClick={() => setIsOpen(!isOpen)} 
    >
      {lable}
      <b>{selected}</b>

      <svg
        width="10"
        height="7"
        className={`inline ml-2 ${isOpen && "rotate-180 "}`}
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 1l4 4 4-4"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>

      {/* options container */}
      <div
        className={`${
          !isOpen && "hidden"
        } absolute top-[130%] z-10 left-0 text-gray-default border border-gray-light bg-white w-full py-2 text-base divide-y-[1px] *:flex *:justify-between *:items-center *:px-5 *:py-2 rounded-lg shadow-2xl hover:[&>*]:text-Purple-default [&>*]:cursor-pointer`}
      >
        {options.map((option) => (
          <div onClick={() => handleSelect(option)} key={option}>
            {option}
            {selected === option && (
              <svg
                width="13"
                height="10"
                viewBox="0 0 13 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.968262 4.85894L4.49995 8.39062L11.9999 0.890625"
                  stroke="#AD1FEA"
                  strokeWidth="2"
                />
              </svg>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
