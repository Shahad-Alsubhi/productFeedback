import { useNavigate } from "react-router";
import Button from "./Button";

const EmptyState = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 py-20 xl:py-28 rounded-xl flex flex-col items-center text-center h-full justify-center xl:h-4/5 ">
      <img
        src="/images/empty.svg"
        alt="empty state illustration"
        className="md:w-32 md:h-36 mb-14 max-md:mb-10"
      />
      <h1 className="font-bold md:text-2xl">There is no feedback yet.</h1>
      <h2 className="text-xs md:text-base max-w-[410px] mb-8 mt-4 text-gray-default">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </h2>
      <Button
        onClick={() => navigate("/new")}
        customStyle="bg-Purple-default hover:bg-Purple-hover max-md:text-xs max-md:px-4"
      >
        + Add Feedback
      </Button>
    </div>
  );
};

export default EmptyState;
