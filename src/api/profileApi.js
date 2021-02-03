import {instance} from "./instance";

export let profileApi = {
	getProfileData(userId) {
		return instance.get(`profile/${userId}`).then((response) => response.data);
	},
};
