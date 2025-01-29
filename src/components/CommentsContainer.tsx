import { IComment } from "../types";
import CommentSection from "./CommentSection";

const CommentsContainer = ({
  comments,
  feedback_id,
}: {
  comments: IComment[];
  feedback_id: string;
}) => {
  return (
    <div className="bg-white p-6 rounded-xl min-h-40">
      <h1 className="font-bold mb-4">{comments.length} Comments</h1>
      <div className="divide-y-[1px]">
        {comments.map(
          (baseComment) =>
            !baseComment.parent_comment && (
              <CommentSection key={baseComment._id}
                feedback_id={feedback_id}
                baseComment={baseComment}
                comments={comments}
              />
            )
        )}
      </div>
    </div>
  );
};

export default CommentsContainer;
