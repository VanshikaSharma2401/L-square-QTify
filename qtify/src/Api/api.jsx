import axios from 'axios';

// Define a function to make the API call
export async function fetchData() {
  try {
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export async function fetchNewAlbumsData() {
  try {
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
    console.log('Data:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

