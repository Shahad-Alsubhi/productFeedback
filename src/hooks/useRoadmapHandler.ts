import { useEffect, useState } from "react";
import useFeedbacks from "./useFeedbacks";
import { IFeedback, Status } from "../types";

const useRoadmapHandler = () => {
  const [groupFeedback, setgroupFeedback] = useState<
    Record<Status, IFeedback[]>
  >({ "In-progress": [], Live: [], Planned: [], Sugestion: [] });
  const { useFetchAllFeedback } = useFeedbacks();
  const { data, isLoading, isError } = useFetchAllFeedback(
    "excludeSuggestion=true"
  );

  const groupFeedbackByStatus = (data: IFeedback[]) => {
    return data.reduce(
      (acc, feedback) => {
        const status: Status = feedback.update_status;
        if (!acc[status]) acc[status] = [];
        acc[status].push(feedback);
        return acc;
      },
      //initial accumulator
      {} as Record<Status, IFeedback[]>
    );
  };

  useEffect(() => {
    if (data) {
      const feedbacks = groupFeedbackByStatus(data);
      setgroupFeedback(feedbacks);
    }
  }, [data]);

  return { isLoading, groupFeedback, isError };
};

export default useRoadmapHandler;
