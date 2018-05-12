import axios from 'axios';

const API_KEY = 'cfd3460502ec4936e47974a0ed00a3c9';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	};
}