import axios from "axios";

const instance = axios.create({
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    withCredentials: true,
    headers: {
        'API-KEY': 'a4edd21c-bec0-43a3-9f93-c9250a25d69e'
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data
            })
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
            .then(response => {
                return response.data
            })
    },
    getProfile(userId) {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
    }
}


export const authAPI = {
    me() {
        return instance.get(`https://social-network.samuraijs.com/api/1.0/auth/me`)
    }
}