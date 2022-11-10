import "./index.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import _ from "lodash";

export default function Search(articles) {
  let data = articles.articles;

  const sortedCities = _.orderBy(data, "headline.main", "asc");
  console.log(sortedCities);

  return (
    <Autocomplete
      disableClearable
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
        />
      )}
    />
  );
}
