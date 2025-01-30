import { useContext, useEffect, useState } from "react";
import useFeedbacks from "../hooks/useFeedbacks";
import FeedbackSkeleton from "../skeletons/FeedbackSkeleton";
import EmptyState from "./EmptyState";
import Feedback from "./Feedback";
import { CategoryContext } from "../context/categoryContext";
import { SortContext } from "../context/sortContext";
import { IFeedback } from "../types";

const FeedbackContainer = () => {
  const { useFetchAllFeedback } = useFeedbacks();
  const { data, isLoading, isError } = useFetchAllFeedback();
  const { categoryList } = useContext(CategoryContext);
  const { sortOption } = useContext(SortContext);
  const [feedbacks, setFeedbacks] = useState<IFeedback[]>([]);
  
  useEffect(() => {
    if (data) {
      let sortedData = [...data];
      switch (sortOption) {
        case "Most Comments": {
          sortedData = sortedData.sort((a, b) => b.comments.length - a.comments.length);
          break;
        }
        case "Least Comments": {
          sortedData = sortedData.sort((a, b) => a.comments.length - b.comments.length);
          break;
        }
        case "Least Upvotes": {
          sortedData = sortedData.sort((a, b) => a.Upvotes - b.Upvotes);
          break;
        }
        case "Most Upvotes": {
          sortedData = sortedData.sort((a, b) => b.Upvotes - a.Upvotes);
          break;
        }
      }
      setFeedbacks(sortedData); 
    }
  }, [sortOption, data]);
  
  return (
    <div className="max-md:mt-7 [&>*]:mb-5">
      {isLoading ? (
        [1, 2, 3, 4, 5].map((num) => <FeedbackSkeleton key={num} />)
      ) : isError ? (
        <p>Something went wrong... </p>
      ) : feedbacks.length === 0 ? (
        <EmptyState />
      ) : categoryList.length === 0 ? (
        feedbacks!.map((feedback) => <Feedback key={feedback._id} data={feedback} />)
      ) : (
        feedbacks
          .filter((feedback) => categoryList.includes(feedback.category))
          .map((feedback) => <Feedback key={feedback._id} data={feedback} />)
      )}
    </div>
  );
};

export default FeedbackContainer;
