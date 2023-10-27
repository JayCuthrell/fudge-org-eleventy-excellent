/** Returns all blog posts as a collection. */
const getAllPosts = collection => {
  const projects = collection.getFilteredByGlob('./src/posts/*.md');
  return projects.reverse();
};

/** Year by Year */

const _ = require("lodash");

const postsByYear = (collection) => {
  return _.chain(collection.getFilteredByGlob('./src/posts/*.md'))
    .groupBy((post) => post.date.getFullYear())
    .toPairs()
    .reverse()
    .value();
};

module.exports = {
  getAllPosts,
  postsByYear
};


