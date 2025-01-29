import Header from "../components/Header";
import Suggestions from "../components/Suggestions";

const Home =  () => {
   return (
    <div className="bg-off-white flex flex-col lg:flex-row lg:items-start min-h-screen xl:px-[10%] xl:py-[2%]">
      <Header />
      <Suggestions />
    </div>
  );
};

export default Home;
