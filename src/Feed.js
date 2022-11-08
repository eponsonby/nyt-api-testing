import React from "react";
import Article from "./Article";
import "./index.css";

const Feed = ({ articles }) => {
  return (
    <div className="container">
      {articles?.map?.((article) => (
        <Article data={article} />
      ))}
    </div>
  );
};

export default Feed;