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

/** markdown only collection */

const onlyMarkdown = collection => {
  return collection.getFilteredByGlob('./src/**/*.md');
};

/** Adding tags for topics */

const tagList = collection => {
  const tagsSet = new Set();
  collection.getAll().forEach(item => {
    if (!item.data.tags) return;
    item.data.tags
      .filter(tag => !['posts', 'all'].includes(tag))
      .forEach(tag => tagsSet.add(tag));
  });
  return Array.from(tagsSet).sort();
};

module.exports = {
  getAllPosts,
  postsByYear,
  onlyMarkdown,
  tagList
};


