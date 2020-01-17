const axios = require("axios");

function GetAllRoutes() {
    return axios.get("getRoutes")
        .then((res) => { return res.data })
        .catch((err) => { console.log(err) });
}

function CreateNewRoute(route) {
    return axios.post("createRoute", { route })
        .then(res => {
            console.log(res.data);
        })
}

module.exports = { GetAllRoutes, CreateNewRoute };