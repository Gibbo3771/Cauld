const APIXU = require("./apixu");

const apixu = new APIXU({ apiKey: process.env.API_KEY });

module.exports = apixu;
