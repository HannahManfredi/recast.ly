import VideoListEntry from '/compiled/src/components/VideoListEntry.js';

var VideoList = ({videos}) => (
  <div className="video-list">
    {videos.map(video => <VideoListEntry key={video.id.videoId} video={video}/>)}
    {/* <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div>
    <div><h5><em>videoListEntry</em> view goes here</h5></div> */}
  </div>
);

// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
export default VideoList;

//videos will come from YT Api?
//sends a data object via http
//we will look at that object
//render it here

