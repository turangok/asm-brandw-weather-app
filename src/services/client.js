import axios from "axios";

export const getData = async (url, params) => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_API_URL,
            url,
            method: 'get',
            // data,
            params,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            },
        })

        return response.data
    } catch (err) {
        console.error('​response.error:', err)
        return err
    }
};

export const postData = async (url, data) => {
    try {
        const response = await axios({
            baseURL: process.env.REACT_APP_API_URL,
            url,
            method: 'post',
            data,
            // params,
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                'x-rapidapi-key': process.env.REACT_APP_API_KEY
            },
        })

        return response.data
    } catch (err) {
        console.error(err)
        throw err
    }
};
