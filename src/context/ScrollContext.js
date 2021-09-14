import React, { createContext, useContext, useState } from "react";

const ScrollContext = createContext();
const ScrollUpdateContext = createContext();

export function useScroll() {
  return useContext(ScrollContext);
}
export function useScrollUpdate() {
  return useContext(ScrollUpdateContext);
}

// eslint-disable-next-line react/prop-types
export const ScrollProvider = ({ children }) => {
  const [scrollSection, setScrollSection] = useState("homeSection");

  return (
    <ScrollContext.Provider value={scrollSection}>
      <ScrollUpdateContext.Provider value={setScrollSection}>
        {children}
      </ScrollUpdateContext.Provider>
    </ScrollContext.Provider>
  );
};
