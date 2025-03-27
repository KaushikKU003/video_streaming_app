import React from "react";
import videos from "../assets/videos";  // Import dummy data
import VideoCard from "../components/VideoCard"; // Import VideoCard component

const Home = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {videos.map((video) => (
          <div key={video.id} className="col-12 col-md-6 col-lg-4 mb-4">
            <VideoCard video={video} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
