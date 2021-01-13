import * as client from './client';

export const getCurrent = async (params) => {
    return await client.getData('/current', params)
}

export const getDaily = async (params) => {
    return await client.getData('/forecast/daily', params)
}

// export const postJob = async (data) => {
//     return await client.postData('/forecast/daily', data)
// }