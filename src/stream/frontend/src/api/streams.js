import axios from "axios";

export default axios.create({
  baseURL: process.env.REACT_APP_BASE,
  // headers: {
  //     "Access-Control-Allow-Origin": "*",
  //     "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
  //   }
});
