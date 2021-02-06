import exampleVideoData from '../data/exampleVideoData.js'; //
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import searchYouTube from '../lib/searchYouTube.js';
import YOUTUBE_API_KEY from '../config/youtube.js';
class App extends React.Component {

  constructor() { //a special method of a class for creating and initializing an object of that class
    super(); //super is used access super class' methods, etc.
    this.state = {
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
      //we need something to store our current video in our state
    };
    //bind our updateVideo functio  to App
    this.updateVideo = this.updateVideo.bind(this);
    this.wrapper = this.wrapper.bind(this);
    // this.searchYouTube = this.searchYouTube.bind(this);
  }

  //we don't need this func because state is initialized with examplevideodata
  // componentDidMount() { //on initial render of App, this func call the func that makes our initial call to youtube api
  //   //set the homepage before the user searches
  // }

  updateVideo(newVideo) {
    //update this.state.currentVideo based on which title we click on
    this.setState({ //we're getting an error because wherea we're invoking updateVideo doesn't know what this is
      //could be a binding issue?
      //define what this is
      currentVideo: newVideo
    });
  }

//we need to define a function that takes in optionsObj and a callback
  //should respond to user query in search bar
  //invoke searchYouTube
  //update App's state with new video etc.

  //TODO
  //fix data object, pass final test for search youtube
  //change query to "state"
  //search function
wrapper() {

  var optionsObj = {
    query: 'cat',
    max: 5,
    key: YOUTUBE_API_KEY
  };
  // this.updateVideo)
  searchYouTube(optionsObj, (data) => {
    console.log(data.items);
  });

}
// var optionsObj = {
//   query: 'cat',
//   max: 5,
//   key: YOUTUBE_API_KEY
// };

  render() {
    return (
      <div>
        {console.log('our func: ', this.wrapper())}
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
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

// var App = () => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <div><h5><em>search</em> view goes here</h5></div>
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={exampleVideoData[3]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={exampleVideoData} />
//       </div>
//     </div>
//   </div>
// );

//make this an ES6 class component
//App should be stateful: how do we get exampleVideoData to live in App's state??
//it has a function that lives on it so we can pass it to children and update state on App
//in App's state we need to create something that renders the list
//and something that renders the current video


// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;

// Refactor App into a class component  using ES6 classes
// Initialize the state of App to keep track of all the videos in the video list and the current video in the player. Pass this state down as props to its children components. Continue to use the example data.
// Make it so that when the title of a VideoListEntry is clicked, that video is displayed in the player. Do not add state to any of the functional components.
// Make sure all the active tests for App are passing. You can open the tests with npm test


//youtube data for videos needs to look like this:
// window.fakeVideoData = [{
//   etag: 'L332gQTY',
//   id: {
//     videoId: '000001'
//   },
//   snippet: {
//     title: 'Cute cat video',
//     description: 'The best cat video on the internet!',
//     thumbnails: {
//       default: {
//         url: 'http://www.fndvisions.org/img/cutecat.jpg',
//       }
//     }
//   }
// }, {
//   etag: 'SmEuSYxg',
//   id: {
//     videoId: '000002'
//   },
//   snippet: {
//     title: 'Super cute cat video',
//     description: 'Better than the best cat video on the internet!',
//     thumbnails: {
//       default: {
//         url: 'https://pbs.twimg.com/profile_images/567285191169687553/7kg_TF4l.jpeg',
//       }
//     }
//   }
// }, {
//   etag: 'ujBKBmLk',
//   id: {
//     videoId: '000003'
//   },
//   snippet: {
//     title: 'Hack Reactor opens extension school on Mars',
//     description: 'Watch the ribbon cutting of the first coding bootcamp in space',
//     thumbnails: {
//       default: {
//         url: 'https://d3c5s1hmka2e2b.cloudfront.net/uploads/topic/image/14/hack_reactor.png',
//       }
//     }
//   }
// }, {
//   etag: 'Nj7xszf8',
//   id: {
//     videoId: '000004'
//   },
//   snippet: {
//     title: 'JavaScript Jamz',
//     description: 'Rock on with JavaScript remixes of today\'s top songs',
//     thumbnails: {
//       default: {
//         url: 'http://3.bp.blogspot.com/-PTty3CfTGnA/TpZOEjTQ_WI/AAAAAAAAAeo/KeKt_D5X2xo/s1600/js.jpg',
//       }
//     }
//   }
// }, {
//   etag: 'I2w-7nRI',
//   id: {
//     videoId: '000005'
//   },
//   snippet: {
//     title: 'Framework fatigue and you',
//     description: 'JS guru, @McKringleberry teaches tips and tricks for managing JS framework fatigue',
//     thumbnails: {
//       default: {
//         url: 'https://facebook.github.io/react/img/logo.svg',
//       }
//     }
//   }
// }];
