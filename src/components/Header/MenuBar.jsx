import { AccountCircle } from '@mui/icons-material';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HomeIcon from '@mui/icons-material/Home';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SearchIcon from '@mui/icons-material/Search';
import { Chip, Link, styled, Tooltip } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Badge from '@mui/material/Badge';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import Logo from '../../assets/images/logo.png';
import NavBtn from './NavBtn';
import ProfileMenu from './ProfileMenu';

const LogoImage = styled('img')({
    maxWidth: 170,
});

const MenuBar = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                    <Badge badgeContent={4} color="error">
                        <MailIcon />
                    </Badge>
                </IconButton>
                <p>Messages</p>
            </MenuItem>
            <MenuItem>
                <IconButton size="large" aria-label="show 17 new notifications" color="inherit">
                    <Badge badgeContent={17} color="error">
                        <NotificationsIcon />
                    </Badge>
                </IconButton>
                <p>Notifications</p>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="primary-search-account-menu"
                    aria-haspopup="true"
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <p>Profile</p>
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar sx={{ backgroundColor: '#fff', color: '#0984e3' }} position="static">
                <Toolbar>
                    <Box sx={{ flexGrow: 1 }}>
                        <Typography variant="h6" noWrap component="div" sx={{ mr: 2 }}>
                            <Link component={RouterLink} to="/">
                                <LogoImage src={Logo} alt="logo" />
                            </Link>
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 1 }}>
                        <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                            <NavBtn
                                size="large"
                                aria-label="Home"
                                color="inherit"
                                disableRipple
                                startIcon={<HomeIcon />}
                                component={RouterLink}
                                to="/home"
                            >
                                Home
                            </NavBtn>

                            <NavBtn
                                size="large"
                                aria-label="show Favorites"
                                color="inherit"
                                disableRipple
                                startIcon={<FavoriteIcon />}
                                component={RouterLink}
                                to="/favorites"
                            >
                                Favorites
                            </NavBtn>

                            <NavBtn
                                size="large"
                                aria-label="show 17 new notifications"
                                color="inherit"
                                disableRipple
                                startIcon={
                                    <Badge badgeContent={17} color="error">
                                        <NotificationsIcon />
                                    </Badge>
                                }
                                component={RouterLink}
                                to="/notifications"
                            >
                                Notifications
                            </NavBtn>
                            <NavBtn
                                size="large"
                                aria-label="show 4 new mails"
                                color="inherit"
                                disableRipple
                                startIcon={
                                    <Badge badgeContent={4} color="error">
                                        <MailIcon />
                                    </Badge>
                                }
                                component={RouterLink}
                                to="/messages"
                            >
                                Messages
                            </NavBtn>
                            {/* <IconButton
                                size="large"
                                edge="end"
                                aria-label="account of current user"
                                aria-controls={menuId}
                                aria-haspopup="true"
                                onClick={handleProfileMenuOpen}
                                color="inherit"
                            >
                                <AccountCircle />
                            </IconButton> */}
                        </Box>
                    </Box>
                    <Chip
                        color="secondary"
                        label="Add Review"
                        icon={<AddCircleIcon />}
                        component={RouterLink}
                        to="/add-review"
                        sx={{
                            textTransform: 'capitalize',
                            transition: 'transform 0.2s',
                            fontWeight: 'bold',
                            '&:hover': {
                                cursor: 'pointer',
                                transform: 'scale(1.1)',
                            },
                        }}
                    />
                    <Box>
                        <Tooltip title="Discover">
                            <IconButton
                                size="small"
                                color="inherit"
                                component={RouterLink}
                                to="/discover"
                                sx={{ ml: 2, backgroundColor: '#f3f6f9' }}
                            >
                                <SearchIcon />
                            </IconButton>
                        </Tooltip>
                    </Box>
                    {/* <Chip
                        color="primary"
                        avatar={
                            <Avatar
                                alt="Biplob Hasan Nibir"
                                src="https://mui.com/static/images/avatar/1.jpg"
                            />
                        }
                        label="Biplob Hasan Nibir"
                        variant="outlined"
                        component={RouterLink}
                        to="/profile"
                    /> */}
                    <ProfileMenu />
                    <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <ArrowDropDownIcon />
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </Box>
    );
};

export default MenuBar;
