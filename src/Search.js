import "./index.css";
import Feed from "./Feed.js";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import _ from "lodash";
import { useState } from "react";

export default function Search({ articles, onFilter }) {
  const [shownArticle, setShownArticle] = useState([]);

  let data = articles;
  const sortedCities = _.orderBy(data, "headline.main", "asc");

  function handleSelect(e) {
    let articleToShow = onFilter(e);
    setShownArticle(articleToShow);
  }

  return (
    <div>
      <Autocomplete
        id="free-solo-demo"
        freeSolo
        sx={{ width: 300 }}
        options={sortedCities?.map?.((article) =>
          article.headline.main.slice(12)
        )}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search articles"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onSelect={handleSelect}
          />
        )}
      />
      <Feed articles={articles} shownArticle={shownArticle} />
    </div>
  );
}
