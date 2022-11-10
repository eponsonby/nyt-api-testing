import "./index.css";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

export default function Search(articles) {
  let data = articles.articles;
  return (
    <Autocomplete
      disableClearable
      id="free-solo-demo"
      freeSolo
      sx={{ width: 300 }}
      options={data?.map?.((article) => article.headline.main)}
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
