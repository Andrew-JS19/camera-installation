"use strict";
var Data = {"Contact":true};
async function GetCameraPricingPage(req, h) {

return h.view("Pages/Cameras/pricing",{"Data": Data});

}

async function GetCameraDemoPage(req, h) {

    return h.view("Pages/Cameras/demopage",{"Data": Data});
    
}
    


module.exports = {
    GetCameraPricingPage,
    GetCameraDemoPage
};