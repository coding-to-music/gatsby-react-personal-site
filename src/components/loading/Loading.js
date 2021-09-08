import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { LoadingScreen, Loader } from "./LoadingStyle";

const Loading = ({ timeLoad }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsLoading(false);
    }, timeLoad);
    return () => {
      clearTimeout(timeOut);
    };
  }, []);

  console.log("test");

  return (
    <>
      {isLoading && (
        <LoadingScreen id="loading-screen">
          <Loader id="loader" />
        </LoadingScreen>
      )}
    </>
  );
};

export default Loading;

Loading.propTypes = {
  timeLoad: PropTypes.number,
};
Loading.defaultProps = {
  timeLoad: 1000,
};
