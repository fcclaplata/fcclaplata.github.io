import axios from 'axios'

const github = axios.create({
  baseURL: 'https://api.github.com/',
  timeout: 1000,
  headers: {
    "Authorization": "bearer 0f615491123211b03e3fe8d16dc986018b41275d"
  }
});

export const query = (query) => github.post('/graphql', {query})