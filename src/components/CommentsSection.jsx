import {BiLike} from "react-icons/bi"
import { getTimeAgo } from "../assets/getTimeAgo";
function CommentsSection({ comments }) {

    return (
      <div className="mt-4 text-white">
        {/* Comment Count & Input */}
        <h4 className="fw-bold">{comments.length} Comments</h4>
        <div className="d-flex align-items-center my-3">
          <img
            src="https://shorturl.at/hqSen" // Change this URL
            alt="Your Profile"
            className="rounded-circle me-2"
            width="40"
            height="40"
          />
          <input
            type="text"
            className="form-control bg-dark border-0"
            placeholder="Add a comment..."
          />
        </div>
  
        {/* Comments List */}
        {comments.map((comment) => (
          <div key={comment.comment_id} className="mt-4  pb-2">
            <div className="d-flex">
              {/* Commenter's Profile Picture */}
              <img
                src={comment.channel.thumbnail}
                alt={comment.channel.name}
                className="rounded-circle me-2"
                width="40"
                height="40"
              />
              <div>
                {/* Commenter's Name */}
                <div className="d-flex align-items-center">
                    <h6 className="fw-bold mb-1">{comment.channel.name} {comment.channel.verified && <span className="text-primary">✔</span>}</h6> 
                    <span className="ms-2">{getTimeAgo(comment.published_date)}</span>
                </div>
                
                {/* Comment Text */}
                <p className="mb-1">{comment.content}</p>
  
                {/* Likes & Published Date */}
                <small className="text-white"><BiLike size={22}/> {comment.vote_count}</small>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
  
  export default CommentsSection;
  