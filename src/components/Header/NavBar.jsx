import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HomeIcon from "@mui/icons-material/Home";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import { Chip, Link, styled } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import ElevateAppBar from "./ElevateAppBar";
import ProfileMenu from "./ProfileMenu";

const LogoImage = styled("img")({
  maxWidth: 170,
});

const pages = [
  {
    name: "Home",
    path: "/home",
    icon: <HomeIcon />,
  },
  {
    name: "Favorites",
    path: "/favorites",
    icon: <FavoriteBorderIcon />,
  },
  {
    name: "Search",
    path: "/search",
    icon: <SearchIcon />,
  },
  // {
  //   name: "Notifications",
  //   path: "/notifications",
  //   icon: (
  //     <Badge badgeContent={17} color="error">
  //       <NotificationsNoneIcon />
  //     </Badge>
  //   ),
  // },
  // {
  //   name: "Messages",
  //   path: "/messages",
  //   icon: (
  //     <Badge badgeContent={4} color="error">
  //       <MailIcon />
  //     </Badge>
  //   ),
  // },
];

const NavBar = ({ btnLabel, btnPath }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const navigate = useNavigate();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <ElevateAppBar>
      {/* Desktop Logo */}
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
      >
        <Link component={RouterLink} to="/">
          <LogoImage src={LogoImg} alt="logo" />
        </Link>
      </Typography>

      <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="menu-appbar"
          aria-haspopup="true"
          onClick={handleOpenNavMenu}
          color="inherit"
          sx={{ m: 1, p: 1, backgroundColor: "#f3f6f9" }}
        >
          <MenuIcon />
        </IconButton>
        {/* Mobile menu item */}
        <Menu
          id="menu-appbar"
          anchorEl={anchorElNav}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          open={Boolean(anchorElNav)}
          onClose={handleCloseNavMenu}
          sx={{
            display: { xs: "block", md: "none" },
          }}
        >
          {pages.map((page, index) => (
            <MenuItem key={index} onClick={() => navigate(page.path)}>
              <Typography textAlign="center">{page.name}</Typography>
            </MenuItem>
          ))}
        </Menu>
      </Box>
      {/* Mobile Logo*/}
      <Typography
        variant="h6"
        noWrap
        component="div"
        sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
      >
        <Link component={RouterLink} to="/">
          <LogoImage src={LogoImg} alt="logo" width={130} />
        </Link>
      </Typography>
      {/* desktop menu item */}
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((item, index) => (
          <Box key={index}>
            <Tooltip title={item.name}>
              <IconButton
                size="small"
                color="inherit"
                component={RouterLink}
                to={item.path}
                sx={{ m: 1, p: 1, backgroundColor: "#f3f6f9" }}
              >
                {item?.icon}
              </IconButton>
            </Tooltip>
          </Box>
        ))}
      </Box>
      <Chip
        color="secondary"
        label={btnLabel || "Add Disease"}
        icon={<AddCircleIcon />}
        component={RouterLink}
        to={btnPath || "/add-disease"}
        sx={{
          display: { xs: "none", md: "flex" },
          textTransform: "capitalize",
          transition: "transform 0.2s",
          fontWeight: "bold",
          "&:hover": {
            cursor: "pointer",
            transform: "scale(1.1)",
          },
        }}
      />

      <Box sx={{ flexGrow: 0 }}>
        <ProfileMenu />
      </Box>
    </ElevateAppBar>
  );
};

export default NavBar;
