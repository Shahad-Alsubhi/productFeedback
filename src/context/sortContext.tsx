import { createContext, ReactNode, SetStateAction, useState } from "react";

export type sortOption =
  | "Most Upvotes"
  | "Least Upvotes"
  | "Most Comments"
  | "Least Comments";
interface SortContextType {
  sortOption: sortOption;
  setSortOption: React.Dispatch<SetStateAction<sortOption>>;
}

export const SortContext = createContext<SortContextType>({
  sortOption: "Most Upvotes",
  setSortOption: () => {},
});

const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sortOption, setSortOption] = useState<sortOption>("Most Upvotes");
  console.log(sortOption);
  
  return (
    <SortContext.Provider value={{ sortOption, setSortOption }}>
      {children}
    </SortContext.Provider>
  );
};
export default SortProvider;
