const Path = require("path");
const About = require("../controllers/about")

module.exports =   [
  {
    // Static files
    method: "GET",
    path: "/about",
    options: {
    },
    handler: About
  },
  ];