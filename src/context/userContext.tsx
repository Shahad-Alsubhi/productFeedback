import { createContext, SetStateAction, useState } from "react";


interface UserContextType {
  accessToken: string;
  setAccessToken: React.Dispatch<SetStateAction<string>>;
}

export const UserContext = createContext<UserContextType>({
  accessToken: "",
  setAccessToken: () => {},
});

const UserProvider = ({ children }: { children: React.ReactNode }) => {
  
  const [accessToken, setAccessToken] = useState("");

  return (
    <UserContext.Provider value={{ accessToken, setAccessToken }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider;
