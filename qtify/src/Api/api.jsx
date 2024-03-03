import axios from 'axios';

// Define a function to make the API call
export async function fetchData() {
  try {
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/top');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export async function fetchNewAlbumsData() {
  try {
    const response = await axios.get('https://qtify-backend-labs.crio.do/albums/new');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export async function fetchSongsData() {
  try {
    const response = await axios.get('https://qtify-backend-labs.crio.do/songs');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}
export async function fetchGenereData() {
  try {
    const response = await axios.get('https://qtify-backend-labs.crio.do/genres');
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
}

