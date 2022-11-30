import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com'

const options = {
  params: {maxResults: '50'},
  headers: {
    // 'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY || '',
    'X-RapidAPI-Key': '2ccf3ddcf1mshaa35f1cf066bdf7p165c29jsnd031cdc1778d',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFromAPI = async (url) => {
	const { data } = await axios.get(`${BASE_URL}/${url}`, options)

	return data
}
