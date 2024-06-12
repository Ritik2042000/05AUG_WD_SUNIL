export const API_KEY = 'AIzaSyCMaFPCyi42IANtC52a_GQgUUL5dLgSDDw';
export const BASE_URL = 'https://www.googleapis.com/youtube/v3';
export const YOUTUBE_VIDEOS = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=${API_KEY} `;

export const SEARCH_SUGGESTION_API=` https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=surfing&key=${API_KEY}`;
export default API_KEY;