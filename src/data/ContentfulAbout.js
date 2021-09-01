// BUG: Contenful rich text is super laggy and hard to implement in gatsby, so im doing it manually.

import React from "react";
import PropTypes from "prop-types";

import ContentfulAboutQuest from "./contentfulProjectsAbout.js/ContentfulAboutQuest";

const ContentfulAbout = ({ title }) => {
  return (
    <>
      {title === "Quest" && <ContentfulAboutQuest />}
      {title === "Explodii" && <ContentfulAboutQuest />}
      {title === "Stockersa" && <ContentfulAboutQuest />}
      {title === "Personal Website" && <ContentfulAboutQuest />}
    </>
  );
};

ContentfulAbout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentfulAbout;
