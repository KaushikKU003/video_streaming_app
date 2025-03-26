import { useLocation, Link } from "react-router-dom";
import Videos from "../assets/videos"; 
import { getTimeAgo } from "../assets/getTimeAgo";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // Filter videos by title or description
  const filteredVideos = Videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery) ||
      video.description.toLowerCase().includes(searchQuery)||
      video.author.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container mt-4">
      <h2 className=" mb-3">Search Results for: "{searchQuery}"</h2>

      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <Link key={video.videoId} to={`/video/${video.id}`} state={{ video }} className="text-decoration-none" style={{ color: "inherit" }}>
            <div className="d-flex mb-3 p-3 rounded shadow-sm">
              {/* Video Thumbnail */}
              <img
                src={video.thumbnailUrl}
                className="rounded"
                alt={video.title}
                style={{ width: "35%", height: "10%", objectFit: "cover" }}
              />

              {/* Video Details */}
              <div className="ms-3">
                {/* Title */}
                <h3 className="fw-bold">{video.title}</h3>

                {/* Views & Uploaded Time */}
                <p className=" mb-1" style={{ fontSize: "0.9rem" }}>
                  {video.views} views • {getTimeAgo(video.uploadTime)}
                </p>

                {/* Channel Info */}
                <div className="d-flex align-items-center mb-2">
                  <img
                    src={video.profileUrl}
                    className="rounded-circle me-2"
                    alt={video.author}
                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                  />
                  <span className="fw-semibold">{video.author}</span>
                </div>

                {/* Description */}
                <p className="" style={{ fontSize: "1rem" }}>
                  {video.description.substring(0, 100)}...
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-light">No results found.</p>
      )}
    </div>
  );
}

export default SearchResults;
