import axios from "axios";

export const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "f5a121b3-d5d2-4866-a73a-ab1418f0e4d8"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 5) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}` )
            .then(response => response.data)
    },
    follow(id) {
        return instance.post(`follow/${id}`).then(response => response.data)
    },
    unFollow(id){
        return instance.delete(`follow/${id}`).then(response => response.data)
    }
}

export const authApi = {
    getAuth() {
        return  instance.get(`auth/me`).then(response => response.data)
    }
}