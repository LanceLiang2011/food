import axios from "axios";

const yelp = axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_API_KEY}`,
  },
});

export default yelp;
