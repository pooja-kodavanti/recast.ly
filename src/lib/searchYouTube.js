var searchYouTube = (options, callback) => {
  // TODO

  const url = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
    url: url,
    type: 'GET',
    data: {
      q: options.query,
      key: options.key,
      maxResults: options.max,
      max: options.max,
      type: 'video',
      part: 'snippet'
    },
    dataType: 'json',
    success: function (data) {
      callback(data.items);
      return data.items;
    },
    error: function (data) {
      throw new Error('error fetching data from youtube api');
    }
  });
};

window.searchYouTube = searchYouTube;

