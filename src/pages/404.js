import React from "react";

import Seo from "../components/Seo";

const errorPage = () => {
  return (
    <>
      <Seo title="Not Found" />
      <main>
        <h1>That's a dead ending</h1>
      </main>
    </>
  );
};

export default errorPage;
