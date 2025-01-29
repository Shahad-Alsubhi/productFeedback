import { Navigate,  useParams } from "react-router";
import CommentsContainer from "../components/CommentsContainer";
import Feedback from "../components/Feedback";
import useFeedbacks from "../hooks/useFeedbacks";
import FeedbackSkeleton from "../skeletons/FeedbackSkeleton";
import CommentForm from "../components/CommentForm";
import GoBackButton from "../components/GoBackButton";

const FeedbackDetail = () => {
  const { feedback_id } = useParams();
  const { useFetchFeedbackById } = useFeedbacks();
  const { data, isLoading, isError } = useFetchFeedbackById(feedback_id!);

  if (isError) return <Navigate to={"/"} />;
  return (
    <div className="bg-off-white p-8 min-h-screen flex flex-col gap-8 [&>*]:max-w-[730px] [&>*]:2xl:max-w-[950px] xl:py-[4%] [&>*]:mx-auto  [&>*]:w-full ">
      <header className="flex justify-between">
        <GoBackButton />
        {/* <Button
          onClick={() => {
            navigate("/edit");
          }}
          customStyle="bg-blue-default hover:bg-blue-hover "
        >
          Edit Feedback
        </Button> */}
      </header>
      {isLoading ? (
        <FeedbackSkeleton />
      ) : (
        <>
          <Feedback data={data} />
          <CommentsContainer comments={data.comments} feedback_id={data._id} />
          <CommentForm feedback_id={data._id} />
        </>
      )}
    </div>
  );
};

export default FeedbackDetail;
