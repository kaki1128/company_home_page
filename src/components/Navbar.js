import * as React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import SearchIcon from '@mui/icons-material/Search';
import iconHeader from './assets/image/icon_des.png'
import { makeStyles } from '@mui/styles';
import { Grid, styled } from '@mui/material';
import Popover from '@mui/material/Popover';
import { TextField } from '@mui/material'
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaBars, FaTimes } from 'react-icons/fa'
import "./Navbar.css"
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import Fade from '@mui/material/Fade';
import { HashLink } from 'react-router-hash-link';

const useStyles = makeStyles({
  dropdownContent: {
    "display": "flex",
    "position": "absolute",
    "background-color": "#12043f",
    "min-width": "400px",
  },

  navItem: {
    color: "white",
    textDecoration: "none",
    display: 'inline-block',
    padding: '1rem',
    cursor: "pointer",
  },

  iconHeader: {
    paddingTop: "5px",
    paddingLeft: "100px",
    width: "210px",
  },
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
  const [searchParams, setSearchParams] = useSearchParams();

  // Hamburger
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false)

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
        <Toolbar>
          <Grid container direction="row" alignItems="center" style={{ height: "106px" }}>
            <Grid item xs={4}>
              <a href='/'>
                <img src={iconHeader} alt='iconHeader' className={classes.iconHeader} />
              </a>
            </Grid>

            <Grid item xs={7} justifyContent="flex-end" alignItems="center"
              sx={{ display: { xs: 'flex', md: 'none' } }} >
              <div className='hamburger' onClick={handleClick}>
                {click ? (<FaTimes size={20} style={{ color: '#ffffff' }} />)
                  : (<FaBars size={20} style={{ color: '#ffffff' }} />)}
              </div>
            </Grid>

            <Grid item xs={7} justifyContent="flex-end" sx={{ display: "flex" }}>
              <div className={click ? "nav-menu active" : "nav-menu"}>
                {/* <div class="hover-underline-animation"> */}
                <Link class="navItem" to="/about" onClick={closeMenu}>About Us</Link>
                {/* <div onClick={() => { navigate("/about"); setClick(false) }}>About Us</div> */}
                {/* </div> */}



                <div class="navItem">
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

                <HashLink class="navItem" smooth to={'/#our-clients'}>
                  <div>Our Clients</div>
                </HashLink>

                <div class="navItem">
                  <div onClick={() => { navigate("/contact"); setClick(false) }}>Contact Us</div>
                </div>

                <div class="hover-underline-animation">
                  <div>
                    <SearchIcon aria-describedby={id} variant="contained" onClick={handleSearchClick} style={{ height: "18px", color: "white" }} />
                  </div>
                  <Popover id={id} open={openSearch} anchorEl={anchorSearchEl} setAnchorEl={setSearchAnchorEl} onClose={handleSearchClose}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}>
                    <Typography sx={{ p: 2.5 }} style={{ background: "#12043f" }}>

                      <form onSubmit={()=> {console.log({searchParams})}}>
                        <SearchIcon style={{ color: "white", height: "18px" }} sx={{ padding: "9px 5px 0 0" }} />
                        <StyledTextField
                          variant="standard" color='primary'
                          autoComplete="off"
                          inputProps={{ style: { color: "white" } }}
                          // onChange={(e) => {
                          //   setSearchParams(
                          //     createSearchParams({ words: e.target.value })
                          //   )
                          // }}
                          onChange={(e) => {setSearchParams ({words: e.target.value})}}
                          // onChange={(e)=> {console.log(setSearchParams ({words: e.target.value}))}}
                          
                        />
                      </form>
                    </Typography>

                  </Popover>

                </div>
              </div>
            </Grid>
          </Grid>

        </Toolbar>
      </AppBar>
    </Box >
  );
}