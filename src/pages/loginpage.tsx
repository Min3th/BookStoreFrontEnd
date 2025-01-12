import { AuthProvider } from "@asgardeo/auth-react";
import React, { ReactElement } from "react";
import { useAuthContext } from "@asgardeo/auth-react";




const Loginpage = () => {

  const { state, signIn, signOut } = useAuthContext();
  return (
    <div><button onClick={()=>signIn()}>Login</button></div>
  )
}

export default Loginpage