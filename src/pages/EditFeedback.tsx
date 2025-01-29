import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import GoBackButton from "../components/GoBackButton";
import Label from "../components/Label";

const EditFeedback = () => {
  return (
    <div className="bg-off-white [&>*]:max-w-[650px] [&>*]:mx-auto [&>*]:w-full p-7 min-h-screen flex justify-center items-center max-md:pt-8 max-md:justify-start flex-col">
      <GoBackButton />
      <form className="bg-white relative rounded-xl p-9 mt-7 [&>*]:rounded-lg [&>*]:mb-9 last:[&>*]:mb-0 ">
        <svg
          width="40"
          height="40"
          className="absolute top-0 -translate-y-1/2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <radialGradient
              cx="103.9%"
              cy="-10.387%"
              fx="103.9%"
              fy="-10.387%"
              r="166.816%"
              id="a"
            >
              <stop stop-color="#E84D70" offset="0%" />
              <stop stop-color="#A337F6" offset="53.089%" />
              <stop stop-color="#28A7ED" offset="100%" />
            </radialGradient>
          </defs>
          <g fill="none" fill-rule="evenodd">
            <circle fill="url(#a)" cx="20" cy="20" r="20" />
            <path
              d="M19.512 15.367l4.975 4.53-3.8 5.54L11.226 29l4.485-4.1c.759.275 1.831.026 2.411-.594a1.958 1.958 0 00-.129-2.82c-.836-.745-2.199-.745-2.964.068-.57.607-.767 1.676-.44 2.381L11 28.713c.255-1.06.683-2.75 1.115-4.436l.137-.531c.658-2.563 1.287-4.964 1.287-4.964l5.973-3.415zM23.257 12L28 16.443l-2.584 2.606-4.89-4.583L23.257 12z"
              fill="#FFF"
              fill-rule="nonzero"
            />
          </g>
        </svg>
        <h1 className="font-bold text-2xl mb-10 ">
          Editing ‘Add a dark theme option’
        </h1>
        <Label
          lable="Feedback Title"
          description="Add a short, descriptive headline"
          htmlFor="FeedbackTitle"
        />
        <input
          type="text"
          id="FeedbackTitle"
          className="block bg-gray-light w-full outline-none p-3 border border-gray-light focus:border-blue-default"
        />
        <Label
          lable="Category"
          htmlFor="Category"
          description="Choose a category for your feedback"
        />
        <Dropdown
          options={["Feature", "Enhancement", "Bug", "UI", "UX"]}
          customStyle="bg-gray-light md:w-full border border-gray-light focus:border-blue-default p-3 flex justify-between items-center !text-blue-dark "
        />
        <Label
          lable="Update Status"
          htmlFor="Update Status"
          description="Change feature state"
        />
        <Dropdown
          options={["Suggestion", "Planned", "In-Progress", "Live"]}
          customStyle="bg-gray-light md:w-full border border-gray-light focus:border-blue-default p-3 flex justify-between items-center !text-blue-dark "
        />
        <Label
          lable="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
          htmlFor="FeedbackDetail"
        />
        <textarea
          name="Feedback Detail"
          id="FeedbackDetail"
          rows={5}
          className="resize-none w-full border border-gray-light bg-gray-light p-4 rounded-lg outline-none mb-5 focus:border focus:border-blue-default"
        ></textarea>
        <div className="flex gap-4 justify-end max-md:flex-col-reverse ">
          <Button customStyle="bg-red-default hover:bg-red-hover">
            Delete
          </Button>
          <Button customStyle="bg-gray-default hover:bg-gray-hover md:ml-auto">
            Cancle
          </Button>
          <Button
            type="submit"
            customStyle="bg-Purple-default hover:bg-Purple-hover"
          >
            Add Feedback
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditFeedback;
