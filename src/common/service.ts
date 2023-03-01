const COS_URL = '//cheng-1253620824.cos.ap-chengdu.myqcloud.com';

export const fetchMenu = () => {
	const date = new Date()
	const timestamp = date.getTime()
	return fetch(`${COS_URL}/menu.json?v=${timestamp}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json()).catch(res => console.warn('======', res));
};

export const fetchArticles = () => {
	const date = new Date()
	const timestamp = date.getTime()
	return fetch(`${COS_URL}/articles.json?v=${timestamp}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	}).then((res) => res.json());
};
