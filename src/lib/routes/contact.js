
const Path = require("path");
const Contact = require("../controllers/contact")

module.exports =   [
  {
    // Static files
    method: "GET",
    path: "/contact",
    options: {
    },
    handler: Contact
  },
  ];
