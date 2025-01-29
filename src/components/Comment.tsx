import { IComment } from "../types";
import Button from "./Button";

const Comment = ({
  data,
  setReplay,
}: {
  data: IComment;
  setReplay: ({ replay_to, text }: { replay_to: string; text: string }) => void;
}) => {
  return (
    <div className="py-7 bg-white">
      <div className="flex ">
        <img
          src={data.created_by.picture || "https://res.cloudinary.com/deqnekemi/image/upload/v1725335063/icon-account-g_tsltyd.png"}
          className="w-10 h-10 rounded-full mr-4 shrink-0"
          alt="user's profile picture"
        />
        <div className="flex-shrink overflow-hidden mr-2">
          <h1 className="font-bold text-nowrap truncate
          ">{data.created_by.name}</h1>
          <h2 className="text-sm md:text-base text-gray-default ">
            {data.created_by.username}{" "}
          </h2>
        </div>
        <Button
          onClick={() =>
            setReplay({ text: "", replay_to: `@${data.created_by.username} ` })
          }
          customStyle=" !text-[#4661e6] ml-auto hover:text-[#4661e6] px-0 py-0 hover:underline"
        >
          Reply
        </Button>
      </div>
      <p className="text-gray-default mt-4 text-sm md:text-base md:ml-16">
        <span className="text-Purple-default font-bold mr-1">
          {data.replay_to}
        </span>
        {data.text}
      </p>
    </div>
  );
};

export default Comment;
