"use client";
import React, { createContext, useContext, useState } from "react";

type CursorVariant = "dot" | "view";

const CursorContext = createContext<{
  variant: CursorVariant;
  setVariant: (v: CursorVariant) => void;
}>({
  variant: "dot",
  setVariant: () => {},
});

export const useCursor = () => useContext(CursorContext);

export const CursorProvider = ({ children }: { children: React.ReactNode }) => {
  const [variant, setVariant] = useState<CursorVariant>("dot");
  return (
    <CursorContext.Provider value={{ variant, setVariant }}>
      {children}
    </CursorContext.Provider>
  );
}; 