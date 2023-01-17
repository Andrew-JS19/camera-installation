
const Path = require("path");
const { GetSoftwareDemoPage,GetSoftwarePricingPage } = require("../controllers/Software/softwarecontroller")

module.exports = [
    {
        // Static files
        method: "GET",
        path: "/softwarepricing",
        options: {
        },
        handler: GetSoftwarePricingPage
    },
    {

        // Static files
        method: "GET",
        path: "/softwaredemo",
        options: {
        },
        handler: GetSoftwareDemoPage
    },
];