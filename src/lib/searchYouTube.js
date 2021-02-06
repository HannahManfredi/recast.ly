import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  console.log('options: ', options);

  $.ajax({
    type: 'GET',
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      key: options.key,
      maxResults: options.max,
      type: "video",
      videoEmbeddable: "true",
      q: options.query
    },
    success: function(data) {
      console.log('data from searchYouTube: ', data);
      callback(data);
    },
    error: function(error){
      console.log('failed: ' + error);
    }
  });

};

export default searchYouTube;
