
const Path = require("path");
const Support = require("../controllers/support")

module.exports =   [
  {
    // Static files
    method: "GET",
    path: "/support",
    options: {
    },
    handler: Support
  },
  ];
