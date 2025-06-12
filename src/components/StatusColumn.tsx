import { IFeedback } from "../types";
import Feedback from "./Feedback";

const StatusColumn = ({
  customStyle,
  data,
  title,
  color,
  subTitle,
}: {
  customStyle: string;
  title: string;
  color: string;
  subTitle: string;
  data: IFeedback[];
}) => {
  return (
    <div className={`${customStyle} `}>
      <h1 className="font-bold mt-7">
        {title} ({data?.length||0})
      </h1>
      <h2 className="text-[#647196] mb-6">{subTitle}</h2>
      {data?.map((feedback) => (
        <div
          style={{ "--color": color } as React.CSSProperties}
          className={`before:w-full mt-7 shrink-0 pt-6 before:h-2 rounded-xl before:rounded-t-xl before:absolute before:bg-[var(--color)] before:top-0 before:left-0 relative bg-white [&>*]:flex-col-reverse [&>*>.commentsNum]:absolute [&>*>.commentsNum]:right-4`}
        >
          <h1
            className={`relative text-gray-default before:absolute before:top-1/2 before:-translate-y-1/2 before:left-6 before:w-2 before:h-2 before:rounded-full before:bg-[var(--color)] pl-11 -mb-3 z-10`}
          >
            {title}
          </h1>
          <Feedback key={feedback._id} data={feedback} />
        </div>
      ))}
    </div>
  );
};

export default StatusColumn;
