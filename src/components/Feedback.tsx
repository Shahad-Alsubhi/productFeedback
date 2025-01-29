import { useNavigate } from "react-router";
import Tag from "./Tag";
import VoteButton from "./VoteButton";
import { IFeedback } from "../types";

const Feedback = ({ data }: { data: IFeedback }) => {
  const navigate = useNavigate();

  return (
    <div className="p-6 flex gap-8 max-md:gap-4 max-md:flex-col-reverse items-start relative bg-white rounded-xl">
      <VoteButton score={data.Upvotes} />
      <section className="grow">
        <h1
          onClick={() => {
            navigate(`/feedback/${data._id}/comments`);
          }}
          className="cursor-pointer font-bold mb-3 text-sm md:text-lg"
        >
          {data.title}{" "}
        </h1>
        <h2 className="mb-4 text-gray-default text-sm md:text-base">
          {data.detail}{" "}
        </h2>
        <Tag title={data.category} disabled={true} />
      </section>
      <div className="commentsNum flex gap-2 items-center max-md:absolute max-md:bottom-8 max-md:right-6 my-auto">
        <svg
          width="18"
          height="16"
          viewBox="0 0 18 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="Path"
            d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z"
            fill="#CDD2EE"
          />
        </svg>

        <h3 className="font-bold text-sm">{data.comments.length}</h3>
      </div>
    </div>
  );
};

export default Feedback;
