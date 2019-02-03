import * as React from "react";

const AuthContext = React.createContext(null);

export const AuthProvider = AuthContext.Provider;
export const AuthConsumer = AuthContext.Consumer;
