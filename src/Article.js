import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React from "react";

export default function Article({ data, shownArticle }) {
  function setStatus() {
    let displayProperty = shownArticle === false ? "display: none" : "";
    return displayProperty;
  }

  return (
    <Card className={setStatus} sx={{ width: 500, height: 500 }}>
      <CardHeader
        title={data.headline.main}
        subheader={data.pub_date}
      ></CardHeader>
      <CardMedia
        component="img"
        height="252"
        width="252"
        image={`https://static01.nyt.com/${data.multimedia[8]?.url}`}
      ></CardMedia>
      <CardContent>
        <Typography>{data.abstract}</Typography>
      </CardContent>
    </Card>
  );
}
