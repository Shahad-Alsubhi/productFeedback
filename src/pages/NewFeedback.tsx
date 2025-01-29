import { useLocation, useNavigate } from "react-router";
import Button from "../components/Button";
import Dropdown from "../components/Dropdown";
import Label from "../components/Label";
import GoBackButton from "../components/GoBackButton";
import { useState } from "react";
import useNewFeedbackHandler from "../hooks/useNewFeedbackHandler";
import { Category } from "../types";

const NewFeedback = () => {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("Feature");
  const { handleSubmit, isLoading, validateError } = useNewFeedbackHandler();
  const location=useLocation()  
  
  return (
    <div className="bg-off-white [&>*]:max-w-[540px] [&>*]:mx-auto [&>*]:w-full p-7  min-h-screen flex justify-center items-center max-md:justify-start max-md:pt-8 flex-col">
      <GoBackButton />
      <form
        onSubmit={(e) => handleSubmit(e, selectedCategory as Category)}
        className="bg-white relative rounded-xl mt-9 p-9 [&>*]:rounded-lg [&>*]:mb-9 last:[&>*]:mb-0"
      >
        <svg
          width="56"
          height="56"
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
              <stop stopColor="#E84D70" offset="0%" />
              <stop stopColor="#A337F6" offset="53.089%" />
              <stop stopColor="#28A7ED" offset="100%" />
            </radialGradient>
          </defs>
          <g fill="none" fillRule="evenodd">
            <circle fill="url(#a)" cx="28" cy="28" r="28" />
            <path
              fill="#FFF"
              fillRule="nonzero"
              d="M30.343 36v-5.834h5.686v-4.302h-5.686V20h-4.597v5.864H20v4.302h5.746V36z"
            />
          </g>
        </svg>
        <h1 className="font-bold text-2xl !mb-4 max-md:text-lg">
          Create New Feedback
        </h1>

          <h2 className={`text-red-default ${validateError?"visible":"invisible"} !mb-5`}>All fields are required</h2>
        <Label
          lable="Feedback Title"
          description="Add a short, descriptive headline"
          htmlFor="FeedbackTitle"
        />
        <input
          name="title"
          type="text"
          id="FeedbackTitle"
          className="block bg-gray-light w-full outline-none p-3 border border-gray-light focus:border-blue-default "
        />
        <Label
          lable="Category"
          htmlFor="Category"
          description="Choose a category for your feedback"
        />
        <Dropdown
          onSelect={(selected: string) => setSelectedCategory(selected)}
          options={["Feature", "Enhancement", "Bug", "UI", "UX"]}
          customStyle="bg-gray-light md:w-full border border-gray-light focus:border-blue-default p-3 flex justify-between items-center !text-blue-dark   "
        />
        <Label
          lable="Feedback Detail"
          description="Include any specific comments on what should be improved, added, etc."
          htmlFor="FeedbackDetail"
        />
        <textarea
          name="detail"
          id="FeedbackDetail"
          rows={5}
          className="resize-none w-full border border-gray-light bg-gray-light p-4 rounded-lg outline-none mb-5 focus:border focus:border-blue-default"
        ></textarea>
        <div className="flex gap-4 justify-end max-md:flex-col ">
          <Button
            customStyle="bg-gray-default hover:bg-gray-hover"
            onClick={(e) => {
              e.preventDefault();
              navigate(location.state.from);
            }}
          >
            Cancle
          </Button>
          <Button
            type="submit"
            customStyle="bg-Purple-default hover:bg-Purple-hover"
          >
            {isLoading ? "Loading..." : "Add Feedback"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default NewFeedback;
