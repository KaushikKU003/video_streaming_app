import { useLocation } from "react-router-dom";
import VideoPlayer from "../components/VideoPlayer";
import CommentsSection from "../components/CommentsSection";
import RelatedVideos from "../components/RelatedVideos";
import { useTheme } from "../context/ThemeContext";
import "../CSS/VideoDetails.css";

function VideoDetails() {
  const location = useLocation();
  const {theme}=useTheme()
  const video = location.state?.video; // Get video from state
  

  if (!video) return <h1 className="text-center mt-5">Video not found</h1>; // Handle missing state
    
  return (
    <div className={`container-fluid mt-4 ${theme==="dark"?"text-white" : "bg-white text-dark"} `}>
      <div className="row">
        {/* Left Section: Video & Comments */}
        <div
          className="col-md-8 pe-3 custom-scroll"
          style={{
            height: "85vh",
            overflowY: "auto",
          }}
        >
          <VideoPlayer video={video} theme={theme} />
          <CommentsSection comments={video.comments} theme={theme}/>
        </div>

        {/* Right Section: Related Videos */}
        <div
          className="col-md-4 custom-scroll"
          style={{
            height: "85vh",
            overflowY: "auto",
          }}
        >
          <RelatedVideos currentVideoId={video.videoId} theme={theme}/>
        </div>
      </div>
    </div>
  );
}

export default VideoDetails;
