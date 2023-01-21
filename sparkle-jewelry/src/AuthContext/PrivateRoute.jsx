import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./Auth";


function PrivateRoute({children}) {
const {authState} = useContext(AuthContext);

   if(authState=== false){
    return <Navigate to="/Login" />
   }
   
   return children;
}

export default PrivateRoute;