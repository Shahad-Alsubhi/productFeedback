import { useContext } from "react";
import { CategoryContext } from "../context/categoryContext";
import { Category } from "../types";

const Tag = ({
  title,
  disabled = false,
}: {
  title: Category;
  disabled?: boolean;
}) => {
  const { setCategoryList, categoryList } = useContext(CategoryContext);
  return (
    <button
      disabled={disabled}
      className={`rounded-[10px] text-sm font-semibold px-4 py-1 w-fit text-blue-default bg-off-white cursor-pointer ${
        categoryList.includes(title) &&!disabled
          ? "text-white !bg-blue-default"
          : !disabled && "hover:bg-blue-hover"
      }  `}
      onClick={() => {
        if (categoryList.includes(title))
          setCategoryList([
            ...categoryList.filter((category) => category !== title),
          ]);
        else setCategoryList([...categoryList, title]);
      }}
    >
      {title}
    </button>
  );
};

export default Tag;
