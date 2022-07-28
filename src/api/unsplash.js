import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID O4AH8UDqgPt2-Ztn7mGJ6szsDBRnNfE5X_1Kb8Aq96Q',
  },
});
