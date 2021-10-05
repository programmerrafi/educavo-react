import React, { useState, createContext, useContext, useEffect } from "react";

const VarContext = createContext();

export function useVarContext() {
  return useContext(VarContext);
}

export function CreateConText({ children }) {
  const [popUp, setPopUp] = useState(false);
  const [showNav, setShowNav] = useState(false);
  const [srnSmall, setSrnSmall] = useState(false);

  const hadlePopUp = () => {
    setPopUp(true);
  };
  const handleClose = () => {
    setPopUp(false);
  };
  // navbar useEffect
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShowNav(true);
      } else {
        setShowNav(false);
      }

      if (window.outerWidth < 991) {
        setSrnSmall(true);
      } else {
        setSrnSmall(false);
      }
    });
    window.addEventListener("resize", () => {
      if (window.outerWidth < 991) {
        setSrnSmall(true);
      } else {
        setSrnSmall(false);
      }
    });

    return () => {
      window.removeEventListener("scroll");
      window.removeEventListener("resize");
    };
  }, []);

  // global variable
  const global = {
    popUp,
    hadlePopUp,
    handleClose,
    showNav,
    srnSmall,
  };
  //   console.log(popUp);
  return <VarContext.Provider value={global}>{children}</VarContext.Provider>;
}
