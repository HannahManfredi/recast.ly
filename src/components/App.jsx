import exampleVideoData from '/compiled/src/data/exampleVideoData.js';
import VideoList from '/compiled/src/components/VideoList.js';
import VideoPlayer from '/compiled/src/components/VideoPlayer.js';

class App extends React.Component {

  constructor() { //a special method of a class for creating and initializing an object of that class
    super(); //super is used access super class' methods, etc.
    this.state = {
      videoData: exampleVideoData,
      currentVideo: exampleVideoData[0]
      //we need something to store our current video in our state
    };
  }

  updateVideo(newVideo) {
    //update this.state.currentVideo based on which title we click on
    this.setState({ //we're getting an error because where we're invoking updateVideo doesn't know what this is
      currentVideo: newVideo
    });

  }

  render() {
    return (
      <div>
        {console.log('this: ', this)};
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

