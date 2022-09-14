const COS_URL = '//cheng-1253620824.cos.ap-chengdu.myqcloud.com';

export const fetchMenu = () => {
	return fetch(`${COS_URL}/menu.json`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json()).catch(res => console.warn('======', res));
};

export const fetchArticles = () => {
	return fetch(`${COS_URL}/articles.json`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};
