import axios from "axios";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers:  {
        "API-KEY" : "8579593b-c13a-4558-a6d3-833a832ab043"
    }
})

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
    },
    follow(usersId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${usersId}`)
    },
    unfollow(usersId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${usersId}`)
    }
}