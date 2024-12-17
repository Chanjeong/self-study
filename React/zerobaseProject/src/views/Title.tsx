import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Title({ children }: Props) {
  return (
    <h1
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "36px",
        fontWeight: "bold",
        marginBottom: "30px",
      }}
    >
      {children}
    </h1>
  );
}
