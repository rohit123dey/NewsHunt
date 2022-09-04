import React from "react";

const NewsItem = (props) => {
  let { title, description, imageUrl, newsUrl, author, date, source } = props;

  return (
    <div className="my-3">
      <div className="card">
        <span
          class="position-absolute top-0 translate-middle badge rounded-pill bg-danger"
          style={{ left: "80%", zIndex: "1", fontSize: "0.5rem" }}
        >
          {source}
        </span>
        <img src={imageUrl} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 style={{ fontSize: "0.8rem" }} className="card-title">
            {title}
          </h5>
          <p style={{ fontSize: "0.5rem" }} className="card-text">
            {description}
          </p>
          <p style={{ fontSize: "0.5rem" }} className="card-text">
            <small className="text-muted">
              By {author ? author : "Unknown"} on {new Date(date).toGMTString()}
            </small>
          </p>
          <a
            style={{ fontSize: "0.5rem" }}
            rel="noreferrer"
            href={newsUrl}
            target="_blank"
            className="btn btn-sm btn-dark"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default NewsItem;
