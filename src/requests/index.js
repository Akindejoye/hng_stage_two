import Axios from 'axios';

export const axios = Axios.create(
  {
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.REACT_APP_API_KEY}`,
    },
  }
)