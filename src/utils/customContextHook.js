import { useContext } from "react";
import { UserContext } from "./UserContext";

const useContextHook = () => {
  return useContext(UserContext);
};
export default useContextHook;
