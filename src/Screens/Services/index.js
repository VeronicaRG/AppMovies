import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  headers: {
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YjIyYTZkNjA4ZjQwMjJkMDg2YzJhMzEyZDU3NmIxNCIsInN1YiI6IjYyMDE2ZTk2YWYyZGE4MDA2OTIxZDcwNSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eob5KdN9BACMd3heviXD3N-eFOHlSuj-jGPRzxgSYH0',
  },
});

export default api;
