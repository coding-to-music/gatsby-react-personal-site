import React, { createContext, useContext, useState } from "react";

const LoadingContext = createContext();
const LoadingUpdateContext = createContext();

export function useLoading() {
  return useContext(LoadingContext);
}
export function useLoadingUpdate() {
  return useContext(LoadingUpdateContext);
}

// eslint-disable-next-line react/prop-types
export const LoadingProvider = ({ children }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <LoadingContext.Provider value={isLoaded}>
      <LoadingUpdateContext.Provider value={setIsLoaded}>
        {children}
      </LoadingUpdateContext.Provider>
    </LoadingContext.Provider>
  );
};
