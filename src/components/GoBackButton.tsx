import Button from "./Button";
import { useNavigate } from "react-router";

const GoBackButton = () => {
  const navigate = useNavigate();

  return (
    <Button
      onClick={() => navigate("/")}
      customStyle="hover:underline flex gap-3 text-lg items-center !text-[#3A4374] !text-lg font-bold pl-0 !py-1"
    >
      <svg width="8" height="11" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M6 9L2 5l4-4"
          stroke="#4661E6"
          strokeWidth="2"
          fill="none"
          fillRule="evenodd"
        />
      </svg>
      Go Back
    </Button>
  );
};

export default GoBackButton;
