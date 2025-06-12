import { Link } from "react-router";
import useRoadmapHandler from "../hooks/useRoadmapHandler";

const RoadmapList = () => {
  const { groupFeedback } = useRoadmapHandler();

  return (
    <div className="p-8 bg-white rounded-xl md:self-stretch">
      <h1 className="text-lg font-bold mb-5">
        Roadmap
        <Link
          className="text-base font-semibold decoration-[1.5px] text-blue-default float-right hover:underline underline-offset-2"
          to="/roadmap"
          aria-label="View full roadmap"
        >
          View
        </Link>
      </h1>
      <ul className="text-gray-default leading-7">
        <li
          className={`relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-orange pl-6`}
        >
          Planned{" "}
          <span className="float-right font-bold">
            {groupFeedback.Planned?.length || ""}
          </span>
        </li>
        <li className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-Purple-default pl-6">
          In-Progress{" "}
          <span className="float-right font-bold">
            {groupFeedback["In-progress"]?.length || ""}
          </span>
        </li>
        <li className="relative before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0 before:w-2 before:h-2 before:rounded-full before:bg-blue-light pl-6">
          Live{" "}
          <span className="float-right font-bold">
            {groupFeedback.Live?.length || ""}
          </span>
        </li>
      </ul>
    </div>
  );
};

export default RoadmapList;
