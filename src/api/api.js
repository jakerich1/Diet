/* eslint-disable no-param-reassign */
const axios = require('axios');

const apiInstance = axios.create({
  baseURL: 'https://dietapijr.herokuapp.com/',
  timeout: 10000,
  headers: {
    Accepted: 'appication/json',
    'Content-Type': 'application/json',
  },
});

// Fetch food diary for given date
export const fetchDiary = async (requestDate) => apiInstance.get('diary/', { params: { date: requestDate } });

// Post food entry
export const postFood = async (fName, fCalories, fProtein, key) => apiInstance.post('diary/food/', {
  name: fName, protein: fProtein, calories: fCalories, key,
});

// Post water entry
export const postWater = async (amount, key) => apiInstance.post('diary/water', { amount, key });
