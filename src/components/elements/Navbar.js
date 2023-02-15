import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import iconHeader from '../assets/image/icon_des.png'
import { makeStyles } from '@mui/styles';
import { Collapse, Container, Grid, styled } from '@mui/material';
import Popover from '@mui/material/Popover';
import { TextField } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaBars, FaTimes } from 'react-icons/fa'
import "../css/Navbar.css"
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import { HashLink } from 'react-router-hash-link';
import Demorequest from './Demorequeset';
import { MdOutlineKeyboardArrowUp, MdOutlineKeyboardArrowDown } from "react-icons/md";

const useStyles = makeStyles({
  navItem: {
    color: "white",
    textDecoration: "none",
    display: 'inline-block',
    padding: '1rem',
    cursor: "pointer",
  },

  iconHeader: {
    paddingTop: "5px",
    width: "210px",
    ["@media (max-width:899px)"]: {
      width: "11.5rem",
      display: "flex",
      paddingTop: "0",
    }
  },

  btnBelow: {
    'background-color': '#6561B2',
    'color': '#ffffff',
    'font-size': '13px',
    'font-weight': '700',
    'padding': '12px 60px',
    'border': 'none',
    'cursor': 'pointer',
    'border-radius': '5px',
    'text-align': 'center',
    'margin': 'auto',
    'display': 'block',
    'margin-top': '20px',
    'margin-bottom': '100px',
    ["@media (max-width:899px)"]: {
      'font-size': '10px',
      'margin-top': '0px',
      'margin-bottom': '50px',
    }
  },

  btnHamburger: {
    'background-color': '#6561B2',
    'color': '#ffffff',
    'font-size': '0.8rem',
    'font-weight': '700',
    'padding': '12px 120px',
    'border': 'none',
    'cursor': 'pointer',
    'border-radius': '5px',
    'text-align': 'center',
    'margin': 'auto',
    'display': 'block',
    'margin-top': '0px',
  }
})

const StyledTextField = styled(TextField)({
  "& .MuiInputBase-root": {
    "::before": {
      borderBottom: "1px solid white"
    },
    ":hover:not(.Mui-disabled):before": {
      borderBottom: "1px solid white"
    }
  },
});

export default function Navbar() {
  const classes = useStyles();
  const navigate = useNavigate();

  // Products Dropdown
  const [anchorProductsEl, setProductsAnchorEl] = useState(null);
  const handleProductsPopoverOpen = (event) => { setProductsAnchorEl(event.currentTarget) };
  const handleProductsPopoverClose = () => { setProductsAnchorEl(null); };
  const openProducts = Boolean(anchorProductsEl);

  //Search Popover
  const [anchorSearchEl, setSearchAnchorEl] = useState(null);
  const handleSearchClick = (event) => { setSearchAnchorEl(event.currentTarget); };
  const handleSearchClose = () => { setSearchAnchorEl(null); };

  const openSearch = Boolean(anchorSearchEl);
  const id = openSearch ? 'simple-popover' : undefined;

  //Search
  const [searchInput, setSearchInput] = useState("")

  // Hamburger
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

  //Hamburger Products
  const [open, setOpen] = React.useState(true);
  const handleProductClick = () => {
    setOpen(!open);
  };

  // Change nav color when scrolling
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)


  return (
    <Box>
      <AppBar position="fixed" class={color ? "header header-bg" : openProducts ? "header header-bg" : "header"}>
        <Toolbar style={{ margin: "auto", width: "100%" }}>
          <Container maxWidth="lg">
            <Grid container direction="row" alignItems="center" justifyContent={{ xs: "flex-end", md: "space-between" }}>
              <Grid item xs={6} md={4}>
                <a href='/'>
                  <img src={iconHeader} alt='iconHeader' className={classes.iconHeader} />
                </a>
              </Grid>

              <Grid item xs={6} justifyContent="flex-end" alignItems="center"
                sx={{ display: { xs: 'flex', md: 'none' } }} >
                <div className='hamburger' onClick={handleClick}>
                  {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />)
                    : (<FaBars size={20} style={{ color: '#ffffff' }} />)}
                </div>
              </Grid>

              <Grid item xs={8} justifyContent="flex-end" sx={{ display: "flex" }}>
                <div className={click ? "nav-menu active" : "nav-menu"}>

                  <div class="nav-search-hamburger">

                    <StyledTextField
                      variant="standard"
                      color='primary'
                      autoComplete="off"
                      inputProps={{ style: { color: "white" } }}
                      onChange={(e) => setSearchInput(e.target.value)}
                      onKeyDown={(e) => {
                        if (e.keyCode === 13) { navigate("/search", { replace: false, state: { words: e.target.value } }); { setClick(false) } }
                      }}
                    />
                    <SearchIcon style={{ color: "white", height: "18px" }} sx={{ padding: "9px" }} onClick={() => { navigate("/search", { replace: false, state: { words: searchInput } }); setClick(false) }} />
                  </div>

                  {/* <div class="hover-underline-animation-nav-item"> */}
                  <Link class="navItem" to="/about" onClick={closeMenu}>About Us</Link>
                  {/* <div onClick={() => { navigate("/about"); setClick(false) }}>About Us</div> */}
                  {/* </div> */}

                  <div class="navItem nav-hamburger-item">
                    <div id="fade-button"
                      aria-controls={openProducts ? 'fade-menu' : undefined}
                      aria-haspopup="true" aria-expanded={openProducts ? 'true' : undefined}
                      onClick={handleProductsPopoverOpen}
                      style={{ color: "white" }}>
                      Products
                    </div>
                    <Menu id="fade-menu" MenuListProps={{ 'aria-labelledby': 'fade-button' }} anchorEl={anchorProductsEl} open={openProducts} onClose={handleProductsPopoverClose} TransitionComponent={Fade}
                      PaperProps={{ style: { "background": "#12043f", padding: "20px" } }}>
                      <Grid container direction="row">
                        <Grid item xs={6}>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Inspection" class="dropdown-content">DWSS - Cerebro Inspection</a></MenuItem>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Diary" class="dropdown-content">DWSS - Cerebro Diary</a></MenuItem>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/EDMS" class="dropdown-content">EDMS - Cerebro Project</a></MenuItem>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/BIM" class="dropdown-content">Building Information Modelling</a></MenuItem>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/KMS" class="dropdown-content">Cerebro Knowledge Management System</a></MenuItem>
                        </Grid>
                        <Grid item xs={6}>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Analyse" class="dropdown-content">Cerebro Analyse</a></MenuItem>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Procurement" class="dropdown-content">Cerebro Procurement</a></MenuItem>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/PhotoReg" class="dropdown-content">Cerebro Project - Photo Registration</a></MenuItem>
                          <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Signature" class="dropdown-content">Cerebro Signature App</a></MenuItem>
                        </Grid>
                      </Grid>
                    </Menu>
                  </div>

                  <div class="navItem nav-products-hamburger" onClick={handleProductClick}>
                    Products
                    {open ? <MdOutlineKeyboardArrowUp /> : <MdOutlineKeyboardArrowDown />}
                    <Collapse in={open} timeout="auto" unmountOnExit>
                      <div class="scrollable-div">
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Inspection" class="dropdown-content">DWSS - Cerebro Inspection</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Diary" class="dropdown-content">DWSS - Cerebro Diary</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/EDMS" class="dropdown-content">EDMS - Cerebro Project</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/BIM" class="dropdown-content">Building Information Modelling</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/KMS" class="dropdown-content">Cerebro Knowledge Management System</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Analyse" class="dropdown-content">Cerebro Analyse</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Procurement" class="dropdown-content">Cerebro Procurement</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/PhotoReg" class="dropdown-content">Cerebro Project - Photo Registration</a></MenuItem>
                        <MenuItem onClick={handleProductsPopoverClose}><a href="/product/Signature" class="dropdown-content">Cerebro Signature App</a></MenuItem>
                      </div>
                    </Collapse>
                  </div>

                  <HashLink class="navItem" onClick={closeMenu} smooth to={'/#our-clients'}>
                    <div>Our Clients</div>
                  </HashLink>

                  {/* <div class="navItem">
                  <div onClick={() => { navigate("/contact"); setClick(false) }}>Contact Us</div>
                </div> */}
                  {/* <div class="hover-underline-animation-nav-item"> */}
                  <Link class="navItem" to="/contact" onClick={closeMenu}>Contact Us</Link>
                  {/* <div onClick={() => { navigate("/contact"); setClick(false) }}>Contact Us</div>
                </div> */}

                  <div class="hover-underline-animation nav-hamburger-item">
                    <div>
                      <SearchIcon aria-describedby={id} variant="contained" onClick={handleSearchClick} style={{ height: "18px", color: "white" }} />
                    </div>
                    <Popover id={id} open={openSearch} anchorEl={anchorSearchEl} setAnchorEl={setSearchAnchorEl} onClose={handleSearchClose}
                      anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                      <Typography sx={{ p: 2.5 }} style={{ background: "#12043f" }}>
                        <SearchIcon style={{ color: "white", height: "18px" }} sx={{ padding: "9px 5px 0 0" }} />
                        <StyledTextField
                          variant="standard" color='primary'
                          autoComplete="off"
                          inputProps={{ style: { color: "white" } }}
                          // onKeyDown={(e) => {e.keyCode === 13 &&navigate("/search", { replace: false, state: { words: e.target.value } });}}
                          onKeyDown={(e) => {
                            if (e.keyCode === 13) { navigate("/search", { replace: false, state: { words: e.target.value } }); { setSearchAnchorEl(null) } }
                          }}
                        />
                      </Typography>
                    </Popover>
                  </div>

                  <div class="nav-search-hamburger">
                    <Demorequest className={classes.btnHamburger} />
                  </div>

                </div>
              </Grid>
            </Grid>
          </Container>
        </Toolbar>
      </AppBar>
    </Box >
  );
}