import {instance} from "./instance";

export let authApi = {
	authMe() {
		return instance.get("auth/me").then((response) => response.data);
	},
};
