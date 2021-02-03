import * as axios from "axios";

export const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.0/",
	withCredentials: true,
	headers: {
		"API-KEY": "b6161440-c61f-438e-96f9-7a32c6eec512",
	},
});
