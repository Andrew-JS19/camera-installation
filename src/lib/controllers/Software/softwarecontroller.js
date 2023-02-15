"use strict";
var Data = {"Contact":true};
async function GetSoftwarePricingPage(req, h) {

return h.view("Pages/Software/pricing",{"Data": Data});

}

async function GetSoftwareDemoPage(req, h) {

    return h.view("Pages/Software/demopage",{"Data": Data});
    
    }
    


module.exports = {
    GetSoftwarePricingPage,
    GetSoftwareDemoPage
};