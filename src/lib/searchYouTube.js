import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
//option obj
// Accept an options object with the following properties:
//  query - the string to search for
// options = {
//   part: 'snippet',
//   key: YOUTUBE_API_KEY, //  key - an authorized YouTube Browser API key
//   maxResults: 5, //  max - the maximum number of videos to get, which should default to 5
//   type: "video",
//   videoEmbeddable: "true",
//   q: "rabbits"
// }
//key, max, query

  //ajx
//https://www.googleapis.com/youtube/v3/search
  console.log('options: ', options);
  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key, //  key - an authorized YouTube Browser API key
      maxResults: options.max, //  max - the maximum number of videos to get, which should default to 5
      type: "video",
      videoEmbeddable: "true",
      q: options.query
    },
    success: function(data) {
      callback(data);
    },
    error: function(error){
      console.log('failed:' + error);
    }
    // dataType: dataType
  });

};

export default searchYouTube;

//this function is supposed to make a get request to youtube api and grab a list of videos based on a query