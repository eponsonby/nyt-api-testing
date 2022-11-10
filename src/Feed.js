import React from "react";
import Article from "./Article";
import "./index.css";

const Feed = ({ articles, shownArticle }) => {
  console.log(shownArticle);
  return (
    <div className="container">
      {articles?.map?.((article) => (
        <Article data={article} shownArticle={shownArticle} />
      ))}
    </div>
  );
};

export default Feed;
