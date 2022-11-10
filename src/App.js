import "./index.css";
import Search from "./Search";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import _ from "lodash";

export default function App() {
  const [articles, setArticles] = useState([]);

  const filterArticles = (e) => {
    const sortedCities = _.orderBy(articles, "headline.main", "asc");
    if (e.target.value) {
      let filteredArticle = sortedCities.filter(
        (article) => article.headline.main === `36 Hours in ${e.target.value}`
      );
      return filteredArticle;
    }
  };

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:Travel&query=36-hours&api-key=cG4D80fY9E7z5VAA4bNkpFXXjoaix87L"
      )

      .then((response) => {
        const data = response.data.response;
        setArticles(data.docs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1>New York Times Travel Guides</h1>
      <div className="App">
        <div>
          {articles !== [] ? (
            <Search articles={articles} onFilter={filterArticles} />
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    </>
  );
}
