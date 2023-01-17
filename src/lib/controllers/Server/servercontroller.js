"use strict";

async function GetServerPricingPage(req, h) {

return h.view("Pages/Servers/pricing");

}

async function GetServerDemoPage(req, h) {

    return h.view("Pages/Servers/demopage");
    
    }
    


module.exports = {
    GetServerPricingPage,
    GetServerDemoPage
};