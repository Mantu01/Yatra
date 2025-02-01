import axios, { AxiosRequestConfig } from 'axios';

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

const fetchAttractionReviews = async (): Promise<Review[] | null> => {
  const options: AxiosRequestConfig = {
    method: 'GET',
    url: 'https://booking-com15.p.rapidapi.com/api/v1/attraction/getAttractionReviews',
    params: {
      id: 'PR6K7ZswbGBs',
      page: '1'
    },
    headers: {
      'x-rapidapi-key': '3402b5c42cmshe5a5da08b9f5754p12d55ejsn1960fab79a17',
      'x-rapidapi-host': 'booking-com15.p.rapidapi.com'
    }
  };

  try {
    const response = await axios.request<{ reviews: Review[] }>(options);
    console.log(response.data);
    return response.data.reviews;
  } catch (error) {
    console.error("Error fetching reviews:", error);
    return null;
  }
};

export default fetchAttractionReviews;