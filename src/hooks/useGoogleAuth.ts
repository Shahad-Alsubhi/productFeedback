import { useContext, useEffect } from "react";
import { UserContext } from "../context/userContext";

const useGoogleAuth = () => {
  const { setAccessToken } = useContext(UserContext);
  useEffect(() => {
    try {
      google.accounts.id.initialize({
        client_id: import.meta.env.VITE_ClientId,
        callback: (res: { credential: string }) =>
          handleCredentialResponse(res.credential),
      });
    } catch (e) {
      console.log(e);
    }
  }, []);
  const handleCredentialResponse = async (credential: string) => {
    const res = await fetch("http://localhost:3000/users/auth/signin", {
      method: "post",
      headers: { "Content-Type": "Application/json" },
      body: JSON.stringify({ credential }),
    });
    if (res.ok) {
      const data = await res.json();
      const { accessToken } = data;
      setAccessToken(accessToken);
    }
  };
  return { handleCredentialResponse };
};
export default useGoogleAuth;
