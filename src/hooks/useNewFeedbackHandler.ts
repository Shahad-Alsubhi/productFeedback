import { FormEvent, useContext, useState } from "react";
import useFeedbackMutations from "./useFeedbackMutations";
import { Category } from "../types";
import { useLocation, useNavigate } from "react-router";
import { UserContext } from "../context/userContext";
import { errorAlert, promtLogin } from "../Alerts";

const useNewFeedbackHandler = () => {
  const [validateError, setvalidateError] = useState("");
  const { useCreateFeedback } = useFeedbackMutations();
  const { isLoading, mutate } = useCreateFeedback();
  const navigate = useNavigate();
  const { accessToken } = useContext(UserContext);
  console.log(accessToken, "lk");

  const location = useLocation();

  const handleSubmit = async (
    e: FormEvent<HTMLFormElement>,
    category: Category
  ) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;

    const data = new FormData(form);
    for (const [key, value] of data.entries()) {
      if (!value) {
        setvalidateError(key);
        return;
      }
    }
    if (!window.google) {//If the request to load Google's SDK fails
      errorAlert();
    } else if (!accessToken) {
      await promtLogin();
    } else {
      mutate({
        title: data.get("title")!.toString(),
        detail: data.get("detail")!.toString(),
        category,
      });
      navigate(location.state.from);
    }
  };
  return {
    handleSubmit,
    isLoading,
    validateError,
  };
};

export default useNewFeedbackHandler;
