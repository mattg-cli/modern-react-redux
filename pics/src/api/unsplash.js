import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID 6ZvtBJF-MkwAz8QQ3fBZWvkRFyigyte27ujDwBv5pjw'
  }
});