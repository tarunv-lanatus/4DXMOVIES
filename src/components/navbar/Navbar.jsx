import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import SortIcon from "@mui/icons-material/Sort";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import movieDataContext from "../../context/movieDataContext";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "rgb(212, 212, 212)",
  "&:hover": {
    backgroundColor: "rgb(230, 225, 225)",
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  color: "gray",
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const navigate = useNavigate();
  const movieValues = useContext(movieDataContext);

  const sortHandler = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const searchMovieHandler = (event) => {
    movieValues.searchMovies(event.target.value);
  };

  const handleMenuClose = () => {
    setAnchorEl(false);
  };

  const ascendingSortHandler = () => {
    movieValues.ascendingSortMovies();
    setAnchorEl(false);
  };

  const descendingSortHandler = () => {
    movieValues.descendingSortMovies();
    setAnchorEl(false);
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      id="primary-search-account-menu"
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={ascendingSortHandler}>Ascending</MenuItem>
      <MenuItem onClick={descendingSortHandler}>Descending</MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "rgb(31, 30, 30)" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <NavLink to="/" style={{ color: "white" }}>
              <LiveTvIcon />
            </NavLink>
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            <NavLink to="/" style={{ color: "white", textDecoration: "none" }}>
              4DXMOVIES
            </NavLink>
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              style={{ color: "black" }}
              inputProps={{ "aria-label": "search" }}
              onChange={searchMovieHandler}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "block", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="Go back to home"
              color="inherit"
            >
              <HomeIcon
                onClick={() => {
                  navigate("/");
                }}
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="edit all movies"
              color="inherit"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
              }}
            >
              <EditIcon
                onClick={() => {
                  navigate("/edit");
                }}
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="sort all movies"
              aria-controls="primary-search-account-menu"
              aria-haspopup="true"
              color="inherit"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
              }}
            >
              <SortIcon onClick={sortHandler} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
};
