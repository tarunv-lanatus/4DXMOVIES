import React, { useContext } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import img from './home.jpg';
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import { Navbar } from "../../components/navbar/Navbar";
import movieDataContext from "../../context/movieDataContext";

const theme = createTheme();

export const Homepage = () => {
  const moviesValue = useContext(movieDataContext)
  return (
    <Box style={{backgroundImage: `url(${img})`}}>
    <ThemeProvider theme={theme}>
      <Navbar />
      <Container>
        <Grid container spacing={4}>
          {moviesValue.movieData.movies.map((list, index) => {
            return (
              <Grid item xs={4} key={index}>
                <Card
                  sx={{
                    width: 345,
                    height: "91%",
                    margin: "20px",
                    marginTop: "30px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    backgroundColor: "gray",
                  }}
                >
                  <CardActionArea
                    style={{ backgroundColor: "gray", cursor: "context-menu" }}
                  >
                    <NavLink
                      to={`/movies/${list.movie_id}`}
                      style={{ textDecoration: "none", color: "black" }}
                    >
                      <CardMedia
                        component="img"
                        height="250px"
                        image={list.image}
                      />
                      <CardContent style={{ backgroundColor: "gray" }}>
                        <Typography gutterBottom variant="h5" component="div">
                          {list.title}
                        </Typography>
                        <Typography variant="date" color="text.secondary">
                          Release Date: {list.release_date}
                        </Typography>
                      </CardContent>
                    </NavLink>
                  </CardActionArea>
                  <CardActions
                    style={{
                      justifyContent: "flex-end",
                      backgroundColor: "gray",
                    }}
                  >
                    <NavLink
                      to={`/movies/${list.movie_id}`}
                      style={{
                        textDecoration: "none",
                        bottom: "0px",
                        color: "black",
                      }}
                    >
                      <Button
                        size="small"
                        textAlign="center"
                        variant="contained"
                        color="inherit"
                      >
                        View Details
                      </Button>
                    </NavLink>
                  </CardActions>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </ThemeProvider>
    </Box>
  );
};
