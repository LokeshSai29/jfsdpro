import React, { useState } from "react"; 
import LoginForm from "./Signin/SigninForm";
import SignupForm from "./Signup/SignupForm";
import "./Auth.css";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);

  const togglePanel = () => {
    setIsRegister(!isRegister);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Navbar */}
      <nav className="navbar">
        <div className="navbar-brand">GlitchWork</div>
      </nav>
      
      {/* Auth Container */}
      <div className="flex justify-center flex-grow items-center">
        <div className="box lg:max-w-lg w-full p-8 shadow-lg">
          {isRegister ? (
            <SignupForm togglePanel={togglePanel} />
          ) : (
            <LoginForm togglePanel={togglePanel} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Auth;
