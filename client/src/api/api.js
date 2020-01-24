const axios = require("axios");
const proxy = "http://localhost:6900/api/";

function getAllRoutes() {
  return axios
    .get(`${proxy}routes`)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function addNewRoute(route) {
  return axios
    .post(`${proxy}routes`, route)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function updateRoute(route) {
  return axios
    .put(`${proxy}routes`, route)
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

function deleteRoute(route) {
  return axios
    .delete(`${proxy}routes`, { data: route })
    .then(res => {
      return res.data;
    })
    .catch(err => {
      console.error(err);
    });
}

module.exports = { getAllRoutes, addNewRoute, updateRoute, deleteRoute };
