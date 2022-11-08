import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import Typography from "@mui/material/Typography";
import React from "react";

const Article = ({ data }) => (
  <Card sx={{ width: 400, height: 400 }}>
    <CardHeader
      title={data.headline.main}
      subheader={data.pub_date}
    ></CardHeader>
    <CardContent>
      <Typography>{data.abstract}</Typography>
    </CardContent>
  </Card>
);

export default Article;
