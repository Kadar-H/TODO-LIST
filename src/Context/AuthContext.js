import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // state = { // use method for classes
  //   isLoggedIn: false,
  // };

  const changeAuthStatus = () => {
    // this.setState({ isLoggedIn: !this.state.isLoggedIn }); // used for class component
    setIsLoggedIn(!isLoggedIn);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, changeAuthStatus }}
      // ...this.state use for class method
      // this.changeAuthStatus class method
    >
      {children}
      {/* {this.props.children} class method */}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
