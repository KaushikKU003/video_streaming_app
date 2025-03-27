import { useLocation, Link } from "react-router-dom";
import Videos from "../assets/videos";
import { getTimeAgo } from "../assets/getTimeAgo";

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // Filter videos by title, description, or author
  const filteredVideos = Videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery) ||
      video.description.toLowerCase().includes(searchQuery) ||
      video.author.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Search Results for: "{searchQuery}"</h2>

      {filteredVideos.length > 0 ? (
        filteredVideos.map((video) => (
          <Link
            key={video.id}
            to={`/video/${video.id}`}
            state={{ video }}
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            <div className="row mb-3 p-3 rounded shadow-sm">
              {/* Video Thumbnail */}
              <div className="col-12 col-lg-4 position-relative">
                {/* Video Thumbnail */}
                <img
                  src={video.thumbnailUrl}
                  className="rounded w-100"
                  alt={video.title}
                  style={{ height: "auto", objectFit: "cover" }}
                />

                {/* Duration Overlay */}
                <span
                  className="position-absolute me-4 bottom-0 end-0 bg-dark text-light px-2 py-1 rounded"
                  style={{
                    fontSize: "0.9rem",
                    fontWeight: "bold",
                    margin: "8px",
                    opacity: 0.8,
                  }}
                >
                  {video.duration} {/* Ensure duration is available in your data */}
                </span>
              </div>


              {/* Video Details */}
              <div className="col-12 col-lg-8 mt-2 mt-lg-0">
                <h3 className="fw-bold">{video.title}</h3>

                <p className="mb-1" style={{ fontSize: "0.9rem" }}>
                  {video.views} views • {getTimeAgo(video.uploadTime)}
                </p>

                <div className="d-flex align-items-center mb-2">
                  <img
                    src={video.profileUrl}
                    className="rounded-circle me-2"
                    alt={video.author}
                    style={{ width: "35px", height: "35px", objectFit: "cover" }}
                  />
                  <span className="fw-semibold">{video.author}</span>
                </div>

                <p className="m-0" style={{ fontSize: "1rem" }}>
                  {video.description.substring(0, 100)}...
                </p>
              </div>
            </div>
          </Link>
        ))
      ) : (
        <h1 className="d-flex justify-content-center align-items-center" style={{ height: "72vh", width: "100%" }}>No videos Exists.</h1>
      )}
    </div>
  );
}

export default SearchResults;
