import React from "react";

const Toggle = ({ show, children }) => {
  if (!show) return null;

  return <>{children}</>;
};

export default Toggle;
