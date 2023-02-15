"use strict";


module.exports = async (req, h) => {


var Data = {"Contact":true};
    return h.view("home",{"Data": Data});
    
};