
const Path = require("path");
const {GetCameraDemoPage,GetCameraPricingPage} = require("../controllers/Cameras/CameraController")

module.exports =   [
  {
    // Static files
    method: "GET",
    path: "/camerapricing",
    options: {
    },
    handler: GetCameraPricingPage
  },
  {
    // Static files
    method: "GET",
    path: "/camerademo",
    options: {
    },
    handler: GetCameraDemoPage
  },
  ];
