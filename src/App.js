// import "./styles.css";
import Feed from "./Feed";
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

export default function App() {
  const [articles, setArticles] = useState();

  useEffect(() => {
    axios
      .get(
        "https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=news_desk:Travel&document_type=article&query=36-hours&api-key=cG4D80fY9E7z5VAA4bNkpFXXjoaix87L"
      )

      .then((response) => {
        const data = response.data.response;
        setArticles(data.docs);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      <Feed articles={articles} />
    </div>
  );
}
