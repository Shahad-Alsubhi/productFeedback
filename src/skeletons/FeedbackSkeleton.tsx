import SkeletonElement from "./SkeletonsElement";


const FeedbackSkeleton = () => {
  return (
    <div className="bg-white p-6 my-3 rounded-xl w-full">
        <SkeletonElement type="title" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
        <SkeletonElement type="text" />
    </div>
  );
};

export default FeedbackSkeleton;
