import { createContext, ReactNode, SetStateAction, useState } from "react";
import { Category } from "../types";




interface CategoryContextType {
    categoryList: Category[];
  setCategoryList: React.Dispatch<SetStateAction<Category[]>>;
}

export const CategoryContext=createContext<CategoryContextType>({categoryList:[],setCategoryList:()=>{}})


const CategoryProvider=({children}:{children:ReactNode})=>{
    const [categoryList,setCategoryList]=useState<Category []>([]);
     
return(
    <CategoryContext.Provider value={{categoryList,setCategoryList}}>
        {children}
    </CategoryContext.Provider>
)

}
export default CategoryProvider

