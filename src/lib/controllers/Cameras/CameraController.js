"use strict";

async function GetCameraPricingPage(req, h) {

return h.view("Pages/Cameras/pricing");

}

async function GetCameraDemoPage(req, h) {

    return h.view("Pages/Cameras/demopage");
    
    }
    


module.exports = {
    GetCameraPricingPage,
    GetCameraDemoPage
};