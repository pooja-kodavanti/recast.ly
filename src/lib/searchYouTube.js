var searchYouTube = (options, callback) => {
  // TODO

  const url = 'https://www.googleapis.com/youtube/v3/search';
  $.ajax({
      url: url,
      type: 'GET',
      data: {
        q: options.query,
        key: options.key,
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
        throw new Error('error fetching data from youtube api')
      }
    });
};

window.searchYouTube = searchYouTube;

// https://www.googleapis.com/youtube/v3/search?query=react&key=AIzaSyAr6yOt7TKvwHpFoLjR0t9Wd_MINo-Tu1A&max=5&type=video
// ?query=' + options.query + '&key=' + options.key + '&max=' + options.max + '&type=video';