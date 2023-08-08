import { Box, Button, ThemeProvider, createTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { Navbar } from "../../components/navbar/Navbar";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import { useContext } from "react";
import movieDataContext from "../../context/movieDataContext";

const theme = createTheme();

export const Editpage = () => {
  const moviesValue = useContext(movieDataContext);

  const columns = [
    {
      field: "movie_id",
      headerName: "ID",
      width: 100,
      headerClassName: "centeredHeader",
    },
    {
      field: "title",
      headerName: "Movie",
      width: 150,
      headerClassName: "centeredHeader",
      editable: true,
    },
    {
      field: "genre",
      headerName: "Movie Type",
      width: 150,
      headerClassName: "centeredHeader",
      editable: true,
    },
    {
      field: "release_date",
      headerName: "Release Date",
      type: "text",
      width: 100,
      headerClassName: "centeredHeader",
      editable: true,
    },
    {
      field: "watch_time",
      headerName: "Watch Time",
      width: 100,
      headerClassName: "centeredHeader",
      editable: true,
    },
    {
      field: "actions",
      headerName: "Actions",
      headerClassName: "centeredHeader",
      sortable: false,
      filterable: false,
      width: 150,
      renderCell: (params) => {
        const movie_id = params.row.movie_id;
        console.log(movie_id === 1 && params.row);
        return (
          <>
            <Button
              style={{ cursor: "pointer" }}
              color="inherit"
              onClick={() => {
                moviesValue.updateById(params.row);
                alert(
                  `Update Movie details for movie_id: ${movie_id} sucessfully`
                );
              }}
            >
              <SaveIcon />
            </Button>
            <Button
              style={{ cursor: "pointer" }}
              color="inherit"
              onClick={() => {
                moviesValue.deleteMovieById(movie_id);
              }}
            >
              <DeleteIcon />
            </Button>
          </>
        );
      },
    },
  ];

  const rows = [];

  moviesValue.movieData.movies.forEach((item, index) => {
    item.id = index + 1;
    rows.push(item);
  });

  return (
    <Box style={{ height: "611px" }}>
      <ThemeProvider theme={theme}>
        <Navbar />
        <Box m="50px 298px">
          <Box style={{ height: 400, width: "100%" }}>
            <DataGrid
              style={{
                backgroundColor: "rgb(142, 155, 152)",
                textAlign: "center",
              }}
              rows={rows}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              disableRowSelectionOnClick
            />
          </Box>
        </Box>
      </ThemeProvider>
    </Box>
  );
};
