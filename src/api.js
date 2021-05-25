import axios from 'axios';

// console.log(process.env.REACT_APP_YT_API_KEY)

const request = axios.create({
  baseURL: "https://youtube.googleapis.com/youtube/v3/",
  params: {
    key: "AIzaSyD9rULod0eWpWh_iv6H_OIvhaMu68u5UlE",
  },
})

export default request;