import React from "react";
import { Button } from "react-bootstrap";
import { BiLike ,BiDislike,BiSolidDislike,BiSolidLike} from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { MdOutlineDownload } from "react-icons/md";




const VideoPlayer = ({ video }) => {
  return (
    <div className="text-white">
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
            <h4 className="text-white d-block">{video.author}</h4>
            <span className="small">{video.subscriber}</span>
          </div>
          <button  className="btn bg-danger text-white rounded-5">Subscribe</button>
        </div>
        
        {/* Like, Dislike, Share, and Download Buttons */}
        <div className="d-flex align-items-center gap-3">
            <div className="rounded-5 d-flex" style={{backgroundColor:"#303030"}}>
                <button className="btn text-white d-flex"><BiLike size={24}/><span className="mx-1">{video.likes}</span> likes</button><span className="d-flex align-items-center">|</span>
                <button className="btn text-white"><BiDislike size={24}/></button>
            </div>
          <button  className="btn rounded-5 text-white" style={{backgroundColor:"#303030"}}><RiShareForwardLine size={24}/> Share</button>
          <button className="btn rounded-5 text-white" style={{backgroundColor:"#303030"}}><MdOutlineDownload size={24}/> Download</button>
        </div>
      </div>

      {/* Video Meta & Description */}
      <div className="mt-3 p-3 rounded" style={{ backgroundColor: "#343434" }}>
        <div className="text-white fw-semibold">
            {video.views} views • {video.uploadTime}
        </div>
        <p className="mt-2 text-white">{video.description}</p>
        </div>
    </div>
  );
};

export default VideoPlayer;
