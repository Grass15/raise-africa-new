"use client";
import React, { ReactNode } from "react";
import { useStateContext } from "../context";
import Error403 from "./Error403";

interface Props {
  children: ReactNode;
}

const RenderOnConnection: React.FC<Props> = ({ children }) => {
  const { isConnected } = useStateContext();

  // Render Error403 component if user is not connected
  if (!isConnected) {
    return <Error403 />;
  }

  // Render the children if user is connected
  return <>{children}</>;
};

export default RenderOnConnection;
