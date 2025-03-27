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
<div className="d-flex align-items-center justify-content-between mt-3 flex-wrap">
  {/* Left: Channel Logo & Subscribe Button */}
  <div className="d-flex align-items-center">
    <img 
      src={video.profileUrl} 
      alt="Profile" 
      className="rounded-circle me-2" 
      style={{ width: "40px", height: "40px" }} 
    />
    <div className="me-2">
      <h5 className="mb-0">{video.author}</h5>
      <span className="small">{video.subscriber}</span>
    </div>
    
    {/* Subscribe Button (Smaller on Mobile) */}
    <button  
      className="btn bg-danger text-white rounded-5 ms-2 btn-sm"  
      style={{ fontSize: "14px", padding: "6px 12px" }}
    >
      Subscribe
    </button>
  </div>

  {/* Right: Like, Dislike, Share, Download Buttons */}
  <div className="d-flex align-items-center gap-2 flex-wrap">
    <div 
      className="rounded-5 d-flex flex-wrap align-items-center" 
      style={{ backgroundColor: "#303030", maxWidth: "100%" }}
    >
      <button 
        className="btn text-white d-flex align-items-center btn-sm" 
        onClick={handleLike}
        style={{ fontSize: "14px", padding: "5px 10px" }}
      >
        {likeStatus ? <BiSolidLike size={18} /> : <BiLike size={18} />}
        <span className="mx-1">{likeCount}</span> Likes
      </button>
      <span className="text-white px-1">|</span>
      <button 
        className="btn text-white btn-sm" 
        onClick={handleDislike}
        style={{ fontSize: "14px", padding: "5px 10px" }}
      >
        {dislikeStatus ? <BiSolidDislike size={18} /> : <BiDislike size={18} />}
      </button>
    </div>

    <button 
      className="btn rounded-5 text-white btn-sm" 
      style={{ backgroundColor: "#303030", fontSize: "14px", padding: "5px 10px" }}
    >
      <RiShareForwardLine size={18} /> Share
    </button>

    <button 
      className="btn rounded-5 text-white btn-sm" 
      style={{ backgroundColor: "#303030", fontSize: "14px", padding: "5px 10px" }}
    >
      <MdOutlineDownload size={18} /> Download
    </button>
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
