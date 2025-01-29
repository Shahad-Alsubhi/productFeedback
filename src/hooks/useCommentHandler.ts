import { useContext } from "react";
import useFeedbackMutations from "./useFeedbackMutations";
import { UserContext } from "../context/userContext";
import { errorAlert, promtLogin } from "../Alerts";

const useCommentHandler = () => {
  const { useCommentMutation } = useFeedbackMutations();
  const { mutate, isLoading } = useCommentMutation();
  const { accessToken } = useContext(UserContext);

  const postComment = async ({
    text,
    feedback_id,
    parent_comment,
    replay_to,
  }: {
    parent_comment?: string;
    feedback_id: string;
    replay_to?: string;
    text: string;
  }) => {
    if (!window.google) {//If the request to load Google's SDK fails
      errorAlert();
    } else if (!accessToken) {
      await promtLogin();
    } else {
      return mutate({ text, feedback_id, parent_comment, replay_to });
    }
  };

  return { postComment, isLoading };
};

export default useCommentHandler;
