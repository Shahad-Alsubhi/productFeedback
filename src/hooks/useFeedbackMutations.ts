import { useMutation, useQueryClient } from "@tanstack/react-query";
import axiosInstance from "../api/axiosInstance";
import { useContext } from "react";
import { UserContext } from "../context/userContext";
import { errorAlert, successAlert } from "../Alerts";
import { IFeedback } from "../types";

const useFeedbackMutations = () => {
  const queryClient = useQueryClient();
  const { accessToken } = useContext(UserContext);
 
  const useCommentMutation = () => {
    return useMutation({
      mutationFn: (data: {
        text: string;
        feedback_id: string;
        parent_comment?: string;
        replay_to?: string;
      }) =>
        axiosInstance.post("/feedback/comment", data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      onSuccess: async (_data, variables) => {
        await queryClient.invalidateQueries({
          queryKey: ["feedback", variables.feedback_id],
        });
        successAlert();
      },
      onError: () => {
        errorAlert();
      },
    });
  };

  const useCreateFeedback = () => {
    return useMutation({
      mutationFn: (data: Pick<IFeedback, "title" | "category" | "detail">) =>
        axiosInstance.post("/feedback/new", data, {
          headers: { Authorization: `Bearer ${accessToken}` },
        }),
      onSuccess: async () => {
        await queryClient.invalidateQueries({ queryKey: ["feedbacks"] });
        successAlert();
      },
      onError: () => {
        errorAlert();
      },
    });
  };
  return {
    useCommentMutation,
    useCreateFeedback,
  };
};

export default useFeedbackMutations;
