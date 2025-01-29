import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { IFeedback } from "../types";

const useFeedbacks = () => {
  const useFetchFeedbackById = (id: string) => {
    return useQuery({
      queryKey: ["feedback", id],
      queryFn: async () => {
        const {
          data: { feedback },
        } = await axiosInstance.get<{ feedback: IFeedback }>(`/feedback/${id}`);
        return feedback;
      },
      retry: 0,
    });
  };
  const useFetchAllFeedback = (query?: string) => {
    return useQuery({
      queryKey: ["feedbacks", query],
      queryFn: async () => {
        const {
          data: { feedbacks },
        } = await axiosInstance.get<{ feedbacks: IFeedback[] }>(
          `/feedback?${query}`
        );
        return feedbacks;
      },
      retry: 0,
    });
  };

  return { useFetchFeedbackById, useFetchAllFeedback };
};

export default useFeedbacks;
