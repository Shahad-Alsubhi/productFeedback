import { useState } from "react";
import Button from "./Button";
import useCommentHandler from "../hooks/useCommentHandler";
import CircularProgress from "./CircularProgress";

const CommentForm = ({ feedback_id }: { feedback_id: string }) => {
  const { postComment, isLoading } = useCommentHandler();
  const [text, setText] = useState("");
  return (
    <div className="px-7 py-8 bg-white rounded-xl">
      <h1 className="font-bold mb-7 text-lg">Add Comment</h1>
      <textarea
        onChange={(e) => {
          if (225 - text.length !== 0) setText(e.target.value);
        }}
        name="new comment"
        rows={3}
        value={text}
        placeholder="Type your comment here"
        className="bg-gray-light resize-none placeholder:text-[#8C92B3] w-full p-4 rounded-lg outline-none mb-5 focus:border focus:border-blue-default "
      ></textarea>
      <h2 className="inline text-gray-default">
        {225 - text.length} characters left
      </h2>

      <Button
        onClick={() => {
          postComment({ text, feedback_id });
          setText("");
        }}
        disabled={!text}
        customStyle="bg-Purple-default hover:bg-Purple-hover float-right disabled:opacity-50"
      >
        {isLoading ? <CircularProgress /> : "Post Comment"}
      </Button>
    </div>
  );
};

export default CommentForm;
