import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cerebro from './assets/image/cerebro_grey.png';
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { makeStyles } from '@mui/styles';
import IG from './assets/image/ig.png';
import "./Footer.css"
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles({
    root: {
        background: '#EDEDED'
    },

})

export default function Footer() {

    const classes = useStyles();
    const navigate = useNavigate();

    //Hover Animation
    const [isHover, setIsHover] = React.useState(false);
    const handleMouseEnter = () => { setIsHover(true) };
    const handleMouseLeave = () => { setIsHover(false) };

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.root}>
            <Grid container spacing={2} p={20}>

                <Grid item sm={12} md={4}>
                    <div >
                        <Grid paddingBottom={"10px"}>
                            <img style={{ width: '13rem' }} src={Cerebro} alt="Cerebro" className="margin-footer-l" />
                        </Grid>

                        <Grid item xs={12} paddingBottom={"10px"}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <MdEmail />
                                </Grid>
                                <Grid item xs={10}>
                                    <label className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm margin-footer-s">info@cerebrohk.com</label>
                                </Grid>
                            </Grid>
                        </Grid>

                        <Grid item xs={12}>
                            <Grid container>
                                <Grid item xs={2}>
                                    <IoLocationSharp />
                                </Grid>
                                <Grid item xs={10}>
                                    <label className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm margin-footer-s" >Unit F, 11/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, Kowloon, Hong Kong</label>
                                </Grid>
                            </Grid>
                        </Grid>

                    </div>
                </Grid>

                <Grid item sm={12} md={2}>
                    <div style={{ display: "inline-block" }}>
                        <Grid paddingTop={"15px"}>
                            <Grid item xs={12} paddingBottom={"20px"} sx={{ fontWeight: 'bold' }}>
                                About Us
                            </Grid>

                            <Grid item xs={12} paddingBottom={"20px"} sx={{ fontWeight: 'bold' }}>
                                Our Clients
                            </Grid>

                            <Grid item xs={12} sx={{ fontWeight: 'bold' }}>
                                Follow Us
                            </Grid>
                            <div>
                                <BsFacebook
                                    onClick={() => window.open('https://www.facebook.com/Cerebro-Strategy-Limited-103726845253451/', "_blank")}
                                    size="40"
                                    style={{ margin: '5px' }}
                                    class="fb-hover"
                                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                    // color={isHover ? "blue" : "gray"}
                                />
                                <div class="ig-hover"><div class="inner"><BsInstagram
                                    onClick={() => window.open('https://www.instagram.com/cerebrostrategylimited/', "_blank")}
                                    size="40"
                                    style={{ margin: '5px' }}
                                    // class="ig-hover"
                                    // onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}
                                    // color={isHover ? "transparent" : "gray"}
                                /></div></div>
                                <BsYoutube
                                    onClick={() => window.open('https://www.youtube.com/channel/UCorXExRHKUKGoBsOtRZkzCQ/featured', "_blank")}
                                    size="40"
                                    style={{ margin: '5px' }}
                                    class="u2-hover"
                                />
                            </div>

                        </Grid>
                    </div>
                </Grid>

                <Grid item xs={6}>
                    <Grid container padding={"15px"} sx={{ display: { xs: 'none', md: 'flex' } }}>
                        <Grid item xs={12} paddingBottom={"20px"} sx={{ fontWeight: 'bold' }}>
                            Products & Services
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid item xs={6} >
                                <label
                                    onClick={() => { navigate("/product/Inspection") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    DWSS - Cerebro Inspection
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <label
                                    onClick={() => { navigate("/product/Analyse") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    Cerebro Analyse
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <label
                                    onClick={() => { navigate("/product/Diary") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    DWSS - Cerebro Diary
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <label
                                    onClick={() => { navigate("/product/Procurement") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    Cerebro Procurement
                                </label>
                            </Grid>
                            <Grid item xs={6}>
                                <label
                                    onClick={() => { navigate("/product/EDMS") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    EDMS - Cerebro Project
                                </label>
                            </Grid>
                            <Grid item xs={6}  >
                                <label
                                    onClick={() => { navigate("/product/PhotoReg") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    Cerebro Project - Photo Registration
                                </label>
                            </Grid>
                            <Grid item xs={6}  >
                                <label
                                    onClick={() => { navigate("/product/BIM") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    Building Information Modelling
                                </label>
                            </Grid>
                            <Grid item xs={6}  >
                                <label
                                    onClick={() => { navigate("/product/Signature") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    Cerebro Signature App
                                </label>
                            </Grid>
                            <Grid item xs={6}  >
                                <label
                                    onClick={() => { navigate("/product/KMS") }}
                                    className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">
                                    Cerebro Knowledge Management System
                                </label>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>
            </Grid>

            <Grid sx={{ borderTop: 1, borderColor: 'grey.500' }}>
                <div className="Content-footer-copyRight" >
                    <Grid style={{ padding: '2vw' }} container >
                        <Grid item xs={12} sm={8}>
                            <label className='font-size-px-sm CopyRight color-grey'>© Cerebro Strategy Limited 2021. All Rights Reserved. </label>
                        </Grid>
                        <Grid item xs={6} sm={2}>
                            <Grid container
                            // justify={matches ? "flex-end" : "flex-start"}
                            >
                                <a style={{ "textDecoration": "none" }} href={'./assets/pdf/Terms&Conditions.pdf'} target="_blank" rel="noreferrer">
                                    <label className="font-nunito-regular font-size-px-sm footer-hover color-grey">Terms and Conditions</label>
                                </a>
                            </Grid>
                        </Grid>
                        <Grid item xs={4} sm={2}>
                            <Grid container justify="flex-end">
                                <label
                                    // onClick={() => {navigate("/privacypolicy")} 
                                    style={{ "textDecoration": "none" }} className="font-nunito-regular font-size-px-sm footer-hover color-grey">Privacy Policy</label>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </Grid>
        </Box>
    );
}