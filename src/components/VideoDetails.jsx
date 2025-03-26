import { useLocation } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import CommentsSection from "../components/CommentsSection";
import RelatedVideos from "../components/RelatedVideos";

function VideoDetails() {
  const location = useLocation();
  const video = location.state?.video; // Get video from state

  if (!video) return <h1 className="text-center mt-5">Video not found</h1>; // Handle missing state
    
  return (
    <div className="container mt-4">
      <div className="row">
        {/* Left Section: Video & Comments */}
        <div
          className="col-md-8 pe-3 custom-scroll"
          style={{
            height: "85vh",
            overflowY: "auto",
          }}
        >
          <VideoPlayer video={video} />
          <CommentsSection comments={video.comments} />
        </div>

        {/* Right Section: Related Videos */}
        <div
          className="col-md-4 custom-scroll"
          style={{
            height: "85vh",
            overflowY: "auto",
          }}
        >
          <RelatedVideos currentVideoId={video.videoId} />
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
