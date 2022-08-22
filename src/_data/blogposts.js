const EleventyFetch = require("@11ty/eleventy-fetch");

module.exports = async function () {
  try {
    const url = "http://localhost:8082/api/blogposts?populate=*";

    const response = await EleventyFetch(url, {
      duration: "30s",
      type: "json",
    });
    const blogposts = response.data;
    return blogposts;
  } catch (error) {
    return error.message("😨 Oops! Something has gone terribly wrong!");
  }
};
