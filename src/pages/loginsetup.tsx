import { AuthProvider } from "@asgardeo/auth-react";
import React, { ReactElement } from "react";
import { useAuthContext } from "@asgardeo/auth-react";

const {state,signIn,signOut} = useAuthContext();

const config = {
    signInRedirectURL : "http://localhost:3000/sign-in",
    signOutRedirectURL : "http://localhost:3000/sign-out",
    clientID:"{client_id}",
    baseUrl : "https://api.asgardeo.io/t/{org_name}",
    scope : ["openid","profile"]
};

export const MyApp = (): ReactElement => {
    return (
        <AuthProvider config={config}>
            
        </AuthProvider>
    )
}