import { useState } from "react";
import TagList from "./TagList";
import CloseIcon from "./CloseIcon";
import MenuIcon from "./MenuIcon";
import RoadmapList from "./RoadmapList";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`bg-off-white grid relative z-20 max-md:grid-cols-1 md:m-10 md:mb-0 lg:mr-0 transition-transform ease-in-out md:grid-cols-[1fr,2fr] lg:grid-cols-1  md:gap-6 gap-8 lg:w-[255px] ${isOpen&&"max-md:before:w-full"} max-md:before:fixed max-md:before:left-0 max-md:before:top-[0px] z-50 before:h-full max-md:bottom-0 max-md:before:bg-transparent/60 before:z-10"
        ${
          isOpen
            ? "max-md:before:opacity-100"
            : "max-md:before:opacity-0 max-md:before:translate-x-full"
        } `}
    >
      <div
        className={`flex justify-between relative z-20 max-md:fixed  items-center md:items-end p-6 self-stretch lg:h-[137px] bg-[url("/images/background-sm.png")] max-md:w-full max-md:h-[72px] md:rounded-xl md:bg-[url("/images/background-md.png")] lg:bg-[url("/images/background-lg.png")] bg-no-repeat bg-cover`}
      >
        <h1 className="text-white text-base md:text-xl font-bold">
          Frontend Mentor
          <span className="text-sm md:text-base font-normal block">
            Feedback Board
          </span>
        </h1>
        {!isOpen ? (
          <CloseIcon setIsOpen={setIsOpen} isOpen={isOpen} />
        ) : (
          <MenuIcon setIsOpen={setIsOpen} isOpen={isOpen} />
        )}
      </div>
      {/* sidebar section */}
       <div
        className={`max-md:h-full grid grid-cols-1 gap-6 md:grid-cols-2 items-start content-start lg:grid-cols-1 max-md:fixed max-md:right-0 bottom-0 max-md:top-[0px] z-0 transition-transform duration-500 ease-in-out max-md:w-3/4 bg-off-white max-md:pt-[96px] max-md:p-6 ${
          isOpen ? " animate-transfer" : "max-md:hidden"
        }`}
      >
        <TagList />
        <RoadmapList />
      </div>
    </div>
  );
};

export default Header;
