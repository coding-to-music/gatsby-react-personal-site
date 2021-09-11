import React, { useState, useContext, createContext } from "react";

const GlobeContext = createContext();
const GlobeUpdateContext = createContext();

export function useGlobe() {
  return useContext(GlobeContext);
}
export function useGlobeUpdate() {
  return useContext(GlobeUpdateContext);
}

// eslint-disable-next-line react/prop-types
export const GlobeProvider = ({ children }) => {
  const [isGlobe, setIsGlobe] = useState(true);
  return (
    <GlobeContext.Provider value={isGlobe}>
      <GlobeUpdateContext.Provider value={setIsGlobe}>
        {children}
      </GlobeUpdateContext.Provider>
    </GlobeContext.Provider>
  );
};
