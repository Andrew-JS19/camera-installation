
const Path = require("path");
const { GetServerDemoPage,GetServerPricingPage } = require("../controllers/Server/servercontroller")

module.exports = [
    {
        // Static files
        method: "GET",
        path: "/serverpricing",
        options: {
        },
        handler: GetServerPricingPage
    },
    {

        // Static files
        method: "GET",
        path: "/serverdemo",
        options: {
        },
        handler: GetServerDemoPage
    },
];