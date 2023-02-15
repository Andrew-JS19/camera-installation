"use strict";
var Data = {"Contact":true};
async function GetServerPricingPage(req, h) {

return h.view("Pages/Servers/pricing",{"Data": Data});

}

async function GetServerDemoPage(req, h) {

    return h.view("Pages/Servers/demopage",{"Data": Data});
    
    }
    


module.exports = {
    GetServerPricingPage,
    GetServerDemoPage
};