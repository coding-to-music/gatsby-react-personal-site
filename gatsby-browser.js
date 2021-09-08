/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/display-name */

const React = require("react");
const Layout = require("./src/components/Layout").default;

// Wraps every page in a component
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>;
};

// exports.shouldUpdateScroll = ({
//   routerProps: { location },
//   getSavedScrollPosition,
// }) => {
//   const { pathname } = location;
//   // list of routes for the scroll-to-top-hook
//   const scrollToTopRoutes = [`/`, `/{ContentfulProjects.title}`];
//   // if the new route is part of the list above, scroll to top (0, 0)
//   if (scrollToTopRoutes.indexOf(pathname) !== -1) {
//     window.scrollTo(0, 0);
//   }

//   return false;
// };
