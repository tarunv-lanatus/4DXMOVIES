import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
} from "@mui/material";
import movieData from "../../movielist.json";

export const Homepage = () => {
  return (
    <Container>
      <Grid container spacing={4}>
        {movieData.movies.map((list) => {
          return (
            <Grid item xs={4}>
              <Card sx={{ width: 345, margin: "20px" }} key={list.movie_id}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300px"
                    image={list.image}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {list.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {list.overview}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button size="small" color="primary">
                    Share
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};
