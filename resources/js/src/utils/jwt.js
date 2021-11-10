import Cookies from 'js-cookie'

import { axiosPost } from "./axios"


export class Jwt {

    /**
     *
     * Check access token exist and valid
     *
     */
    static getAccessToken () {

        const access = localStorage.getItem('access')
        return access ? access : ''
    }

    static async ping () {
        const token = this.getAccessToken()
        const response = await axiosPost('dashboard/ping', {
            token,
        })
        return response;
    }
}