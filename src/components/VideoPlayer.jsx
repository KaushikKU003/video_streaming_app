import React,{useState} from "react";
import { BiLike ,BiDislike,BiSolidDislike,BiSolidLike} from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineDownload } from "react-icons/md";

const VideoPlayer = ({ video ,theme}) => {
  const [likeCount, setLikeCount]=useState(Number(video.likes));
  const [likeStatus,setLikeStatus]=useState(false);
  const [dislikeStatus, setDislikeStatus] = useState(false);
  const handleLike = () => {
    if (likeStatus) {
      setLikeCount((prev) => prev - 1); // Remove like
      setLikeStatus(false);
    } else {
      setLikeCount((prev) => (dislikeStatus ? prev + 1 : prev + 1)); // Increase like count only if not disliked
      setLikeStatus(true);
      setDislikeStatus(false); // Remove dislike
    }
  };

  const handleDislike = () => {
    if (dislikeStatus) {
      setDislikeStatus(false); // Remove dislike
    } else {
      setDislikeStatus(true);
      setLikeStatus(false); // Remove like
      if (likeStatus) {
        setLikeCount((prev) => prev - 1); // Decrease like count if it was liked
      }
    }
  };
  return (
    <div className="">
      {/* Video Player */}
      <video 
        controls 
        className="w-100 rounded shadow" 
        style={{ maxWidth: "100%", height: "auto" }} 
        src={video.videoUrl}
      />

      {/* Video Details */}
      <h4 className="mt-3">{video.title}</h4>
      
      {/* Channel Info & Actions */}
      <div className="d-flex align-items-center justify-content-between mt-3">
        <div className="d-flex align-items-center justify-content-between">
          <img 
            src={video.profileUrl} 
            alt="Profile" 
            className="rounded-circle me-2" 
            style={{ width: "40px", height: "40px" }} 
          />
          <div className="me-3">
            <h4 className=" d-block">{video.author}</h4>
            <span className="small">{video.subscriber}</span>
          </div>
          <button  className="btn bg-danger text-white rounded-5">Subscribe</button>
        </div>
        
        {/* Like, Dislike, Share, and Download Buttons */}
        <div className="d-flex align-items-center gap-3">
            <div className="rounded-5 d-flex" 
            style={{backgroundColor:"#303030"}}>
              <button className="btn text-white d-flex align-items-center" onClick={handleLike}> {likeStatus ? <BiSolidLike size={24} /> : <BiLike size={24} />}
                  <span className="mx-1">{likeCount}</span> Likes
              </button>
                  <span className="d-flex align-items-center text-white">|</span>                
              <button className="btn text-white" onClick={handleDislike}>{dislikeStatus ? <BiSolidDislike size={24} /> : <BiDislike size={24} />}</button>
            </div>
          <button  className="btn rounded-5 text-white" style={{backgroundColor:"#303030"}}><RiShareForwardLine size={24}/> Share</button>
          <button className="btn rounded-5 text-white" style={{backgroundColor:"#303030"}}><MdOutlineDownload size={24}/> Download</button>
        </div>
      </div>

      {/* Video Meta & Description */}
      <div className="mt-3 p-3 rounded" style={{ backgroundColor: theme === "dark" ? "#343434" : "#e0e0e0" }}>
          <div className=" fw-semibold">
              {video.views} views • {video.uploadTime}
          </div>
          <p className="mt-2">{video.description}</p>
      </div>
    </div>
  );
};

export default VideoPlayer;
