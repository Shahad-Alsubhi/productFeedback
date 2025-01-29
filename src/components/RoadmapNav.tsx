const RoadmapNav = ({
  setIndex,
  planned,
  live,
  InProgress,index
}: {
  setIndex: (num: number) => void;
  planned: number;
  live: number;
  InProgress: number;index:number
}) => {
  return (
    <nav className="flex row max-md:mt-16 md:hidden justify-between [&>*]:border-b-2 -mx-8 font-bold [&>*]:p-6 [&>*]:grow">
      <button 
      className={`${index === 0? "!border-b-4 border-orange":"!opacity-80"}`}
        onClick={() => {
          setIndex(0);
        }}
      >
        Planned ({planned})
      </button>
      <button
            className={`${index === 1? "!border-b-4 border-Purple-default":"!opacity-80"}`}
        onClick={() => {
          setIndex(1);
        }}
      >
        In-Progress ({InProgress})
      </button>
      <button
            className={`${index === 2? "!border-b-4 border-blue-light":"!opacity-80"}`}

        onClick={() => {
          setIndex(2);
        }}
      >
        Live ({live})
      </button>
    </nav>
  );
};

export default RoadmapNav;
