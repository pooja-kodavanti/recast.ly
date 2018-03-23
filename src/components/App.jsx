class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      videos: window.exampleVideoData,
      currentVideo: window.exampleVideoData[0],
      search: '',
      autoplay: false
    };
  }
  searchYouTube(options) {
    const search = _.debounce(window.searchYouTube.bind(this), 500);
    const cb = (videos) => { 
      this.setState({videos: videos, currentVideo: videos[0]});
    }
    search(options, cb);
  }
  componentDidMount() {
    this.searchYouTube({max: 5, query: 'grumpy cat', key: window.YOUTUBE_API_KEY});    
  }
  select(video) {
    this.setState({
      currentVideo: video
    });
  }
  handleChange(event) {
    this.setState({search: event.target.value});
    this.searchYouTube({query: this.state.search, max: 5, key: window.YOUTUBE_API_KEY});
  }
  handleSearch(event) {
    this.searchYouTube({query: this.state.search, max: 5, key: window.YOUTUBE_API_KEY});
    this.setState({search: ''});
  }
  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.searchYouTube({query: this.state.search, max: 5, key: window.YOUTUBE_API_KEY});
    }
  }
  handleAutoPlay(event) {
    this.setState({autoplay: !this.state.autoplay});
  } 

  render() {
    const select = this.select.bind(this);
    const handleAutoPlay = this.handleAutoPlay.bind(this);
    const handleChange = this.handleChange.bind(this);
    const handleSearch = this.handleSearch.bind(this);
    const handleKeyPress = this.handleKeyPress.bind(this);
    return (
      <div>
        <h1 id="title">Recast.ly</h1>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.state.search} handleChange={handleChange} handleSearch={handleSearch} handleKeyPress={handleKeyPress}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} autoplay={this.state.autoplay} />
          </div>
          <div className="col-md-5">
            <Slider autoplay={this.state.autoplay} handleAutoPlay={handleAutoPlay}/>
            <VideoList videos={this.state.videos} select={select} />
          </div>
        </div>
      </div>
    );
  }
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
