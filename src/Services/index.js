import {API_URL, API_TOKEN} from '@env';
import axios from 'axios';
import i18next from 'i18next';

const api = axios.create({
  baseURL: `${API_URL}`,
  headers: {
    Authorization: `Bearer ${API_TOKEN}`,
  },
  params: {
    language: i18next.language,
  },
});

i18next.on('languageChanged', language => {
  api.defaults.params.language = language;
});

export default api;
