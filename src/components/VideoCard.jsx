import React from "react";
import { useNavigate } from "react-router-dom";
import { getTimeAgo } from "../assets/getTimeAgo";

const VideoCard = ({ video }) => {
  // Function to format time difference

  const navigate=useNavigate();
  const handleClick = () => {
    navigate(`/video/${video.id}`, { state: { video } }); // Navigate and pass video data
  };
  
  return (
    <div className="card d-flex flex-column video-card border-0"
         style={{ width: "100%", maxWidth: "26rem", minHeight: "350px", margin: "1rem", overflow: "hidden",color:"inherit" ,backgroundColor:"inherit" }}>

      {/* Thumbnail Section */}
      <div className="position-relative">
        <img src={video.thumbnailUrl} 
            className="card-img-top rounded-top rounded-4"
            alt={video.title}
          style={{ height: "200px", objectFit: "cover", width: "100%",cursor:"pointer" }} 
          onClick={handleClick}
        />
        
        {/* Video Duration - Bottom Right Corner */}
        <span className="position-absolute bottom-0 end-0 m-2 px-2 py-1 rounded"
              style={{ fontSize: "0.8rem", opacity: 0.8 ,backgroundColor:"#000000" ,color:"white"}}>
          {video.duration}
        </span>
      </div>


      {/* Card Body */}
      <div className="card-body d-flex flex-column gap-2">
        
        {/* Channel Profile & Title */}
        <div className="d-flex align-items-start">
          {/* Profile Image */}
          <img src={video.profileUrl} 
               alt="Channel Profile"
               className="rounded-circle me-2 cursor-pointer"
               style={{ width: "40px", height: "40px", objectFit: "cover" }} />
          
          {/* Video Info */}
          <div className="d-flex flex-column">
            <h5 className="card-title m-0">{video.title}</h5>
            <p className="card-text text-secondary m-0">{video.author}</p>
            <p className="card-text text-secondary m-0">{video.views} views • {getTimeAgo(video.uploadTime)}</p> 
          </div>
        </div>

      </div>
    </div>
  );
};

export default VideoCard;
