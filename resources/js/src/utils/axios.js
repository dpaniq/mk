const axios = require('axios')
// import axios from 'axios'

export async function axiosPost(url, data = {}) {
    
    const currentUrl = (url == 'test')
        ? 'https://webhook.site/58f27412-4115-431c-9443-c6a982156f2d'
        : `${process.env.APP_URL}/${url}`
    
    console.log('currentUrl', currentUrl)
    console.log(process.env.APP_URL)

    // const config = {
    //     method: 'POST',
    //     headers: {
    //         'Accept': 'application/json',
    //         'Content-Type': 'multipart/form-data',
    //     },
    // }

    // return await axios.post(currentUrl, data, config)
    //     .then(function (response) {
    //         return (response.data.success && !response.data?.error) 
    //             ? {success: true, data: response?.data?.data}
    //             : {success: false, error: response?.data?.error}
    //     })
    //     .catch(function (error) {
    //         console.log(error);
    //     })


    const config = {
        method: 'POST',
        url: 'mk.site/dashboard/login',
        headers: { 
            'Authorization': 'Bearer asdasd'
        }
    }
    
    return await axios.post(currentUrl, data, config)
        .then((response) => response.data)
        .catch((error) => {
            console.log('[ERROR AXIOS]', error)
            return false;
        });
}