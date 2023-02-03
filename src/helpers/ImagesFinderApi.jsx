import axios from 'axios';

const searchParams = new URLSearchParams({
  key: '32552892-db73f2ff6c64788c5f5e746be',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 12,
});

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const fetchImg = async (query, page) => {
  const response = await axios.get(`?q=${query}&page=${page}&${searchParams}`);
  const data = response.data;
  return data;
};
