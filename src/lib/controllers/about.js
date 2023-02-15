"use strict";


module.exports = async (req, h) => {


var Data = {"Contact":true};
    return h.view("Pages/about",{"Data": Data});
    
};