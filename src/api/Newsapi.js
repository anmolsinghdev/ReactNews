import axios from 'axios';
const KEY = '32c7800ec184413b8da7007e171d6c27';
export default axios.create({
  baseURL: 'https://newsapi.org/v2/top-headlines',
  params: {
    apikey: KEY,
  },
});
