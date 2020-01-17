
async function GetAllRoutes() {
    console.log("Calling DB....")
    return await fetch("/getRoutes")
            .then(res => res.json())
            .then((res2) => {return res2} )
            .catch(err => console.log(err));
}

async function Wrapper() {
    const result = await GetAllRoutes();
    return result;
}

module.exports = GetAllRoutes;