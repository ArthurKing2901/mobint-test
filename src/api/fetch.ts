import axios from 'axios';

export const fetch = axios.create({
  headers: {
    TOKEN: '123',
  },
  baseURL: 'http://devapp.bonusmoney.pro',
});
