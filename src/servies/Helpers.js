
import axios from 'axios'
import { TMDB_TOKEN } from "../servies/Constant"


async function Helpers(url, method, data, header = {}) {

    return axios(url, {
        method: method,
        headers: { accept: 'application/json', Authorization: 'Bearer ' + TMDB_TOKEN },
        data

    }).then((res) => {
        return res.data
    }).catch((err) => {
        console.log(err);
    })
}

export default Helpers