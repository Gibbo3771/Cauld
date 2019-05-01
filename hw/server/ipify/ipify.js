const axios = require("axios");

// TODO : Needs to be put serverside to avoid browser cors
const getClientIP = () => {
  const config = {
    headers: { "Access-Control-Allow-Origin": "*" }
  };
  return axios.get("https://api.ipify.org?format=json", config);
};

module.exports = { getClientIP };
