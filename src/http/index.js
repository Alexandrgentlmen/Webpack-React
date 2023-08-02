import axios from 'axios';

export const API_URL = 'https://api.spacexdata.com/v3/missions';

const $api = axios.create({
	baseURL: API_URL,
});

export default $api;