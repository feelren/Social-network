import {instance} from "./instance";

export let usersApi = {
	getUsers(currentPage = 1, usersPerPage = 10) {
		return instance.get(`users?page=${currentPage}&count=${usersPerPage}`).then((response) => response.data);
	},
	unfollow(userId) {
		return instance.delete(`follow/${userId}`).then((response) => response.data);
	},
	follow(userId) {
		return instance.post(`follow/${userId}`, {}).then((response) => response.data);
	},
};
