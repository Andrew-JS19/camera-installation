"use strict";

async function GetSoftwarePricingPage(req, h) {

return h.view("Pages/Software/pricing");

}

async function GetSoftwareDemoPage(req, h) {

    return h.view("Pages/Software/demopage");
    
    }
    


module.exports = {
    GetSoftwarePricingPage,
    GetSoftwareDemoPage
};