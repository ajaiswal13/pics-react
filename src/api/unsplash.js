import axios from "axios";

export default axios.create({
    baseURL : 'https://api.unsplash.com',
    headers : {
        Authorization: 'Client-ID 84_91tojCJQFNd6h1eUZTslNN2QTEg_zVqiflIOUTig'
    },
});