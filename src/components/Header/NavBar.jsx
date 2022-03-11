import AddCircleIcon from "@mui/icons-material/AddCircle";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HomeIcon from "@mui/icons-material/Home";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SearchIcon from "@mui/icons-material/Search";
import { Badge, Chip, Link, styled } from "@mui/material";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link as RouterLink } from "react-router-dom";
import LogoImg from "../../assets/images/logo.svg";
import ElevateAppBar from "./ElevateAppBar";
import NavBtn from "./NavBtn";
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
    icon: <FavoriteIcon />,
  },
  {
    name: "Notifications",
    path: "/notifications",
    icon: (
      <Badge badgeContent={17} color="error">
        <NotificationsIcon />
      </Badge>
    ),
  },
  {
    name: "Messages",
    path: "/messages",
    icon: (
      <Badge badgeContent={4} color="error">
        <MailIcon />
      </Badge>
    ),
  },
];

const NavBar = ({ btnLabel, btnPath }) => {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

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
        >
          <MenuIcon />
        </IconButton>
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
            <MenuItem key={index} onClick={handleCloseNavMenu}>
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
      <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
        {pages.map((page, index) => (
          <NavBtn
            key={index}
            size="large"
            color="inherit"
            disableRipple
            startIcon={page?.icon}
            component={RouterLink}
            to={page.path}
            onClick={handleCloseNavMenu}
            // sx={{ my: 2, display: "block" }}
          >
            {page.name}
          </NavBtn>
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
      <Box>
        <Tooltip title="Search">
          <IconButton
            size="small"
            color="inherit"
            component={RouterLink}
            to="/search"
            sx={{ ml: 2, p: 1, backgroundColor: "#f3f6f9" }}
          >
            <SearchIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Box sx={{ flexGrow: 0 }}>
        <ProfileMenu />
      </Box>
    </ElevateAppBar>
  );
};

export default NavBar;
