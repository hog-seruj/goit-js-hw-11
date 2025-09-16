import axios from 'axios';

const API_URL = 'https://pixabay.com/api/';
const API_KEY = '52314850-74672a1c95493b5a9d1e8462c';

export default function getImagesByQuery(query) {
  const searchParams = new URLSearchParams({
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  });

  return axios.get(`${API_URL}?${searchParams}`);
}
