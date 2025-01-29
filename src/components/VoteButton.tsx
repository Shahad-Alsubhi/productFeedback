import { useState } from "react";

const VoteButton = ({ score }: { score: number }) => {
  const [selected, setIsSelected] = useState(false);
  return (
    <button
      className={`rounded-[10px] text-sm font-semibold px-2 py-2 min-w-10 max-md:flex gap-2 items-center  ${
        selected
          ? "bg-blue-default text-white"
          : "bg-off-white hover:bg-blue-hover"
      } cursor-pointer `}
      onClick={() => {
        setIsSelected(!selected);
      }}
    >
      <svg
        width="10"
        height="7"
        className="mb-1 mx-auto"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 6l4-4 4 4"
          stroke={!selected ? "#4661E6" : "currentColor"}
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      {score + +selected}
    </button>
  );
};

export default VoteButton;
