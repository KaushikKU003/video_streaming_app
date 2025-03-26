import Videos from "../assets/videos"; // Import all videos
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function RelatedVideos({ currentVideoId,theme }) {
  const relatedVideos = Videos.filter((v) => v.id !== currentVideoId); // Exclude current video

  return (
    <div className="p-2">
      <h5 className="fw-bold mb-3 ">Related Videos</h5>
      {relatedVideos.map((video) => (
        <Link
          key={video.id}
          to={`/video/${video.id}`}
          state={{ video }}
          className="text-decoration-none"
        >
          <Card className={`video-card d-flex flex-row align-items-center p-2 mb-3 border-0 ${theme==="dark"?"bg-black text-white":""}`}>
            {/* Enlarged Thumbnail */}
            <img
              src={video.thumbnailUrl}
              alt={video.title}
              className="rounded"
              style={{ width: "160px", height: "90px", objectFit: "cover" }} // Bigger size
            />

            <div className="ms-3">
              {/* Video Title */}
              <h5 className="mb-1 fw-bold">{video.title}</h5>

              {/* Channel Name */}
              <p className=" small mb-1">{video.author}</p>

              {/* Views & Time Ago */}
              <p className="small mb-0">
                {video.views} views • {video.uploadTime}
              </p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default RelatedVideos;
