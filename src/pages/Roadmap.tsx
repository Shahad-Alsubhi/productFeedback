import { useState } from "react";
import Button from "../components/Button";
import StatusColumn from "../components/StatusColumn";
import RoadmapNav from "../components/RoadmapNav";
import FeedbackSkeleton from "../skeletons/FeedbackSkeleton";
import { useNavigate } from "react-router";
import useRoadmapHandler from "../hooks/useRoadmapHandler";

const Roadmap = () => {
  const [index, setIndex] = useState(1);
  const navigate = useNavigate();
  const { groupFeedback, isLoading, isError } = useRoadmapHandler();

  return (
    <div className="bg-off-white min-h-screen p-8 xl:px-[10%] xl:py-[2%]">
      <div className="p-5 px-6 md:p-6 bg-blue-dark text-white  flex items-center md:gap-10 max-md:justify-between  mb-3 rounded-xl max-md:absolute max-md:top-0 max-md:right-0 max-md:w-full max-md:rounded-none">
        <div>
          <Button
            onClick={() => navigate("/")}
            customStyle="hover:underline flex gap-3 text-lg items-center pl-0 !py-1"
          >
            <svg width="7" height="10" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L2 5l4-4"
                stroke="#4661E6"
                stroke-width="2"
                fill="none"
                fill-rule="evenodd"
              />
            </svg>
            Go Back
          </Button>
          <h1 className="text-lg font-bold ">Roadmap</h1>
        </div>
      </div>
      <RoadmapNav
        index={index}
        setIndex={setIndex}
        live={groupFeedback.Live?.length||0}
        planned={groupFeedback.Planned?.length||0}
        InProgress={groupFeedback["In-progress"]?.length||0}
      />
      <div className={`md:grid grid-cols-3 gap-3`}>
        {isLoading ? (
          [1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
            <FeedbackSkeleton key={num} />
          ))
        ) : isError ? (
          <p>Something went wrong... </p>
        ) : (
          <>
            <StatusColumn
              data={groupFeedback.Planned}
              title="Planned"
              customStyle={`${index !== 0 && "max-md:hidden"}`}
              color={"#F49F85"}
              subTitle={"Released features"}
            />
            <StatusColumn
              data={groupFeedback["In-progress"]}
              title="In-progress"
              customStyle={`${index !== 1 && "max-md:hidden"}`}
              color={"#AD1FEA"}
              subTitle={"Currently being developed"}
            />
            <StatusColumn
              data={groupFeedback.Live}
              title="Live"
              customStyle={`${index !== 2 && "max-md:hidden"}`}
              color={"#62BCFA"}
              subTitle={"Ideas prioritized for research"}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Roadmap;
