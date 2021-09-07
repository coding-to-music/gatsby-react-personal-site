// BUG: Contenful rich text is super laggy and hard to implement in gatsby, so im doing it manually.

import React from "react";
import PropTypes from "prop-types";

import ContentfulAboutQuest from "./contentfulProjectsAbout.js/ContentfulAboutQuest";
import ContentfulAboutExplodii from "./contentfulProjectsAbout.js/ContentfulAboutExplodii";
import ContentfulAboutStockersa from "./contentfulProjectsAbout.js/ContentfulAboutStockersa";
import ContentfulAboutPersonalWebsite from "./contentfulProjectsAbout.js/ContentfulAboutPersonalWebsite";

const ContentfulAbout = ({ title }) => {
  return (
    <>
      {title === "Quest" && <ContentfulAboutQuest />}
      {title === "Explodii" && <ContentfulAboutExplodii />}
      {title === "Stockersa" && <ContentfulAboutStockersa />}
      {title === "Personal Website" && <ContentfulAboutPersonalWebsite />}
    </>
  );
};

ContentfulAbout.propTypes = {
  title: PropTypes.string.isRequired,
};

export default ContentfulAbout;
