import { useState } from "react";
import { createContext } from "react";


export const AuthContext = createContext();

function AuthContextProvider({children}) {
    const [authState,setAuthState] = useState(false);
   return(
    <AuthContext.Provider value={{authState,setAuthState}}>
        {children}
    </AuthContext.Provider>
   )

}

export default AuthContextProvider;