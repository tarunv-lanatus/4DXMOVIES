import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Link,
  Toolbar,
  Typography,
  alpha,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import EditIcon from "@mui/icons-material/Edit";
import SortIcon from "@mui/icons-material/Sort";
import LiveTvIcon from "@mui/icons-material/LiveTv";
import SearchIcon from "@mui/icons-material/Search";
import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useState } from "react";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
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
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export const Navbar = () => {
  const [showHome, setShowHome] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [showSort, setShowSort] = useState(false);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <LiveTvIcon />
          </IconButton>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "block", sm: "block" } }}
          >
            4DXMOVIES
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "block", md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="show 4 new mails"
              color={showHome ? "info" : "inherit"}
              component={NavLink}
              to="/"
            >
              <HomeIcon
                onClick={() => {
                  setShowHome(true);
                  setShowEdit(false);
                  setShowSort(false);
                }}
              />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color={showEdit ? "info" : "inherit"}
              component={NavLink}
              to="/edit"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
              }}
            >
              <EditIcon
              onClick={() => {
                setShowEdit(true);
                setShowHome(false);
                setShowSort(false);
              }}
               />
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color={showSort ? "info" : "inherit"}
              component={NavLink}
              to="/sort"
              activeStyle={{
                fontWeight: "bold",
                color: "black",
              }}
            >
              <SortIcon
              onClick={() => {
                setShowSort(true);
                setShowHome(false);
                setShowEdit(false);
              }}
               />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
