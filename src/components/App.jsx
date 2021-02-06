import exampleVideoData from '../data/exampleVideoData.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
import Search from './Search.js';
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
      // videoData: [],
      // currentVideo: {}
    };
    this.wrapper = this.wrapper.bind(this);
    this.setInitialVideoData = this.setInitialVideoData.bind(this);
    this.updateVideo = this.updateVideo.bind(this);
  }

  componentDidMount() {
    this.wrapper('cat');
  }

  updateVideo(newVideo) {
    this.setState({
      currentVideo: newVideo
    });
  }

  setInitialVideoData(data) {
    console.log('setInitialVideoData data: ', data.items[0])
    this.setState({
      videoData: data.items,
      currentVideo: data.items[0]
    });
  }

  wrapper(query) {
    var optionsObj = {
      query: query,
      max: 5,
      key: YOUTUBE_API_KEY
    };
    this.props.searchYouTube(optionsObj, (data) => {
      console.log(data.items);
      this.setInitialVideoData(data);
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search search={this.wrapper}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.currentVideo} />
          </div>
          <div className="col-md-5">
            <VideoList videos={this.state.videoData} updateVideo={this.updateVideo}/>
          </div>
        </div>
      </div>
    );
  }

}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

//  Utilize the componentDidMount  lifecycle hook to render your app with live videos returned from searchYouTube
//  Remove the x from the pending tests in AppSpec.jsx, and make sure all the App tests are passing. You can open the tests with npm test
// Commit your progress: "Complete initializing the app with live data"