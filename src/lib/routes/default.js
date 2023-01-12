
const Path = require("path");
const Home = require("../controllers/home")

module.exports =   [
  {
    // Static files
    method: "GET",
    path: "/",
    options: {
    },
    handler: Home
  },
  {
    // Static files
    method: "GET",
    path: "/home",
    options: {
    },
    handler: Home
  },
  {
    // Static files
    method: "GET",
    path: "/{Param*}",
    handler: {
      directory: {
        path: Path.join(__dirname, "../../../static/public")
      }
    },
    options: {
      description: "Provides static resources"
    }
  },
  ];
