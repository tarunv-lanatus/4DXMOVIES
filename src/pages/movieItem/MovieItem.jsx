import { Button, CardMedia, Grid, Typography } from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { NavLink, useParams } from "react-router-dom";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useContext } from "react";
import movieDataContext from "../../context/movieDataContext";

export const MovieItem = () => {
  const { movie_id } = useParams();
  const moviesValue = useContext(movieDataContext)
  const data = moviesValue.movieData.movies.find(
    (item) => item.movie_id === Number(movie_id)
  );

  return (
    <Grid item xs={4} sx={{ display: "flex" }}>
      <div style={{ width: "5%", marginTop: "50px", textAlign: "center" }}>
        <NavLink to={`/`} style={{ color: "white" }}>
          <ArrowBackIosNewIcon style={{ fontSize: "2.5rem" }} />
        </NavLink>
      </div>
      <div style={{ width: "25%", marginTop: "50px", marginLeft: "15px" }}>
        {/* <img height="100%" src={data.image} alt={data.title} /> */}
        <CardMedia component="img" height="500px" image={data.image} />
      </div>
      <div style={{ width: "70%", margin: "50px" }}>
        <Typography
          textAlign="center"
          fontFamily="cursive"
          style={{
            textDecoration: "underline overline",
            textUnderlineOffset: "8px",
          }}
          fontWeight="bold"
          marginTop="25px"
          paddingLeft="20px"
          id="modal-modal-title"
          variant="h4"
          component="h2"
        >
          {data.title}
        </Typography>
        <Typography
          textAlign="right"
          fontFamily='"Times New Roman", Times, serif'
          fontStyle="italic"
          fontWeight="bold"
          marginLeft="75px"
          marginTop="30px"
          paddingLeft="20px"
          id="modal-modal-title"
          variant="p"
          component="p"
        >
          {data.genre}
        </Typography>
        <Typography
          textAlign="left"
          fontFamily='"Times New Roman", Times, serif'
          fontStyle="italic"
          fontWeight="bold"
          paddingLeft="20px"
          id="modal-modal-title"
          variant="h5"
          component="h2"
          mt={4}
        >
          Overview:-
        </Typography>
        <Typography
          id="modal-modal-description"
          fontFamily="Times, serif"
          fontSize="17px"
          sx={{ mt: 1, textAlign: "justify", marginLeft: "20px" }}
        >
          {data.overview}
        </Typography>
        <Grid display="flex" marginTop="20px">
          <div style={{ width: "50%" }}>
            <Typography
              textAlign="left"
              fontFamily='"Times New Roman", Times, serif'
              fontWeight="bold"
              paddingLeft="20px"
              id="modal-modal-title"
              variant="h6"
              component="h2"
              mt={4}
            >
              Release Date:- {data.release_date}
            </Typography>
          </div>
          <div style={{ width: "50%" }}>
            <Typography
              textAlign="center"
              fontFamily='"Times New Roman", Times, serif'
              fontWeight="bold"
              paddingLeft="20px"
              id="modal-modal-title"
              variant="h6"
              component="h2"
              mt={4}
            >
              Watch Time:- {data.watch_time}
            </Typography>
          </div>
        </Grid>
        <Grid display="flex" mt="10px">
          <div
            style={{
              display: "flex",
              justifyContent: "right",
              alignItems: "center",
              height: "100px",
              width: "50%",
            }}
          >
            <NavLink
              to={data.trailer}
              style={{
                textDecoration: "none",
                color: "black",
                textAlign: "center",
              }}
            >
              <Button size="large" variant="contained" color="inherit">
                Trailer
                <PlayArrowIcon color="error" />
              </Button>
            </NavLink>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "left",
              alignItems: "center",
              height: "100px",
              width: "50%",
              marginLeft: "10px",
            }}
          >
            <NavLink
              to={`/edit/${data.movie_id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Button
                size="large"
                variant="contained"
                color="inherit"
                textAlign="center"
              >
                Edit
              </Button>
            </NavLink>
          </div>
        </Grid>
      </div>
    </Grid>
  );
};
