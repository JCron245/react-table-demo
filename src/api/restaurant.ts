import { RestaurantData } from './interface';

export const getRestaurantData = (): Promise<RestaurantData[]> => {
	const authKey = process.env.REACT_APP_API_KEY || '';
	return fetch('https://code-challenge.spectrumtoolbox.com/api/restaurants', {
		headers: {
			Authorization: authKey,
		},
	})
		.then((res) => {
			if (res.ok) {
				return res.json();
			} else {
				return [];
			}
		})
		.then((res) => {
			res.forEach((item: RestaurantData) => {
				// Turning this back into an array to make it easier to deal with
				item.genre = (item.genre as string).split(',');
			});
			return res;
		})
		.catch((e) => {
			console.error('[ERROR] error retrieving restaurant data: ', e);
			return [];
		});
};
