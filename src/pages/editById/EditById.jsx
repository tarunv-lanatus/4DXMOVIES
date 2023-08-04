import { Box, Button, Grid, TextField } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useContext, useState } from "react";
import movieDataContext from "../../context/movieDataContext";
import Scrollbars from "react-custom-scrollbars";

export const EditById = () => {
  const { movie_id } = useParams();
  const navigate = useNavigate();

  const moviesValue = useContext(movieDataContext);

  const data = moviesValue.movieData.movies.find(
    (item) => item.movie_id === Number(movie_id)
  );

  const [changeMovieData, setChangeMovieData] = useState(data);

  const formSubmitHandler = (event) => {
    event.preventDefault();
    moviesValue.updateById(changeMovieData);
    return navigate(`/movies/${movie_id}`);
  };

  return (
    <Box
      style={{
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
      }}
    >
      <Scrollbars
        style={{ width: "100%", height: "100vh", WebkitScrollSnapType: "both" }}
      >
        <Box
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${changeMovieData.backdrop_image})`,
            backgroundSize: "cover",
            filter: "blur(2px) brightness(0.4)",
            zIndex: -1,
          }}
        />
        <form
          onSubmit={formSubmitHandler}
          style={{
            position: "relative",
            zIndex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "20px",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            borderRadius: "10px",
            color: "white",
            width: "80%",
            maxWidth: "800px",
            margin: "0 auto",
          }}
        >
          <Box style={{ marginTop: "20px" }}>
            <TextField
              label="Title"
              value={changeMovieData.title}
              onChange={(event) =>
                setChangeMovieData({
                  ...changeMovieData,
                  title: event.target.value,
                })
              }
              fullWidth
              InputProps={{
                style: { color: "white", width: "800px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Box>
          <Box style={{ marginBottom: "20px" }}>
            <TextField
              style={{ marginTop: "20px" }}
              label="Image URL"
              value={changeMovieData.image}
              onChange={(event) =>
                setChangeMovieData({
                  ...changeMovieData,
                  image: event.target.value,
                })
              }
              fullWidth
              InputProps={{
                style: { color: "white", width: "800px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <TextField
              label="Release Date"
              type="date"
              value={changeMovieData.release_date}
              onChange={(event) =>
                setChangeMovieData({
                  ...changeMovieData,
                  release_date: event.target.value,
                })
              }
              fullWidth
              InputLabelProps={{
                shrink: true,
                style: { color: "white" },
              }}
              InputProps={{
                style: { color: "white", width: "800px" },
              }}
            />
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <TextField
              label="Watch Time"
              value={changeMovieData.watch_time}
              onChange={(event) =>
                setChangeMovieData({
                  ...changeMovieData,
                  watch_time: event.target.value,
                })
              }
              fullWidth
              InputProps={{
                style: { color: "white", width: "800px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <TextField
              label="Genre"
              value={changeMovieData.genre}
              onChange={(event) =>
                setChangeMovieData({
                  ...changeMovieData,
                  genre: event.target.value,
                })
              }
              fullWidth
              InputProps={{
                style: { color: "white", width: "800px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <TextField
              label="Trailer Link"
              value={changeMovieData.trailer}
              onChange={(event) =>
                setChangeMovieData({
                  ...changeMovieData,
                  trailer: event.target.value,
                })
              }
              fullWidth
              InputProps={{
                style: { color: "white", width: "800px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Box>
          <Box style={{ marginBottom: "16px" }}>
            <TextField
              label="Overview"
              multiline
              rows={4}
              value={changeMovieData.overview}
              onChange={(event) =>
                setChangeMovieData({
                  ...changeMovieData,
                  overview: event.target.value,
                })
              }
              fullWidth
              InputProps={{
                style: { color: "white", width: "800px" },
              }}
              InputLabelProps={{
                style: { color: "white" },
              }}
            />
          </Box>
          <Grid item xs={4} sx={{ display: "flex" }}>
            <Box
              style={{
                width: "50%",
                textAlign: "center",
                display: "flex",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                type="submit"
                sx={{
                  padding: "5px 40px",
                  marginLeft: "90px",
                  marginRight: "50px",
                }}
              >
                Submit
              </Button>
              <Button
                variant="contained"
                color="primary"
                sx={{ padding: "5px 40px", marginLeft: "25px" }}
                onClick={() => navigate(`/movies/${movie_id}`)}
              >
                Cancel
              </Button>
            </Box>
          </Grid>
        </form>
      </Scrollbars>
    </Box>
  );
};
