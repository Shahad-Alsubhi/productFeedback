import { useMemo, useState } from "react";
import Comment from "./Comment";
import Button from "./Button";
import CircularProgress from "./CircularProgress";
import useCommentHandler from "../hooks/useCommentHandler";
import { IComment } from "../types";

const CommentSection = ({
  comments,
  baseComment,
  feedback_id,
}: {
  comments: IComment[];
  baseComment: IComment;
  feedback_id: string;
}) => {
  const [replay, setReplay] = useState<{
    replay_to: string;
    text: string;
  } | null>(null);
  const [replies, setReplaies] = useState<IComment[]>([]);
  const { postComment, isLoading } = useCommentHandler();
 
  useMemo(() => {
    const getReplies = (comments: IComment[], parentId: string) => {
      const replies = comments.filter(
        (comment) => comment.parent_comment === parentId
      );
      setReplaies(replies);
    };
    getReplies(comments, baseComment._id);
  }, [baseComment, comments]);

  return (
    <section className="relative max-md:first:[&>*]:relative first:[&>*]:z-10 overflow-hidden">
      <Comment setReplay={setReplay} data={baseComment} />

      <div
        className={`${
          replies.length &&
          "before:w-[2px] before:h-full before:absolute before:top-24 before:left-4 before:bg-[#f3f3f3]"
        } [&>*]:ml-9 last:[&>*]:pl-9 last:[&>*]:ml-0 last:[&>*]:relative last:[&>*]:z-10 first:[&>*]:pb-0 last:[&>*]:pb-7`}
      >
        {replies.map((comment) => {
          return <Comment setReplay={setReplay} data={comment} />;
        })}
      </div>

      {replay && (
        <div
          className={`flex gap-4 items-start max-md:flex-col max-md:items-end md:pl-16 pb-4 bg-white relative z-20`}
        >
          <textarea
            name="new comment"
            rows={3}
            value={replay.text}
            onChange={(e) => {
              {
                if (225 - replay.text?.length !== 0)
                  setReplay({ ...replay, text: e.target.value });
              }
            }}
            autoFocus
            className={`bg-gray-light resize-none placeholder:text-[#8C92B3] grow max-md:w-full p-4 rounded-lg outline-none mb-5 max-md:mb-2 focus:border focus:border-blue-default `}
          ></textarea>
          <Button
            onClick={() => {
              postComment({
                ...replay,
                feedback_id,
                parent_comment: baseComment._id,
              });
              setReplay(null);
            }}
            disabled={!replay.text}
            customStyle="bg-Purple-default hover:bg-Purple-hover float-right disabled:opacity-40"
          >
            {isLoading ? <CircularProgress /> : "Post Reply"}
          </Button>
        </div>
      )}
    </section>
  );
};

export default CommentSection;
