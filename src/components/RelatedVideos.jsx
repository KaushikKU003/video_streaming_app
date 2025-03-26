import Videos from "../assets/videos"; // Import all videos
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

function RelatedVideos({ currentVideoId }) {
  const relatedVideos = Videos.filter((v) => v.id !== currentVideoId); // Exclude current
  console.log(relatedVideos);

  return (
    <div className="p-2">
      <h5 className="fw-bold mb-3 text-white">Related Videos</h5>
      {relatedVideos.map((video) => (
        <Link key={video.id} to={`/video/${video.id}`} state={{ video }} className="text-decoration-none text-light">
          <Card className="d-flex flex-row align-items-center p-2 mb-2 bg-dark text-white border-0">
            <img src={video.thumbnailUrl} alt={video.title} className="rounded" style={{ width: "100px", height: "60px", objectFit: "cover" }} />
            <div className="ms-3">
              <h6 className="mb-1">{video.title}</h6>
              <p className="text-muted small mb-0">{video.subtitle}</p>
            </div>
          </Card>
        </Link>
      ))}
    </div>
  );
}

export default RelatedVideos;
