import axios from "axios";

// TODO : Needs to be put serverside to avoid browser cors
export const getClientIP = () => {
  const config = {
    headers: { "Access-Control-Allow-Origin": "*" }
  };
  return axios.get("https://api.ipify.org?format=json", config);
};
