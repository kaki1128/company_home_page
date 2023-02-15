import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Cerebro from '../assets/image/cerebro_grey.png';
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BsFacebook, BsYoutube, BsInstagram } from "react-icons/bs";
import { makeStyles } from '@mui/styles';
import IG from '../assets/image/ig.png';
import TC from '../assets/pdf/Terms&Conditions.pdf'
import PP from '../assets/pdf/PrivacyPolicy.pdf'
import "../css/Footer.css"
import { useNavigate } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Container, Divider } from '@mui/material';

const useStyles = makeStyles({
    root: {
        background: '#EDEDED',
    },
    tcpp: {
        "textDecoration": "none",
        "float": "right",
        ["@media (max-width:899px)"]: {
            "float": "left",
        }
    }
})

export default function Footer() {

    const classes = useStyles();
    const navigate = useNavigate();

    //Hover Animation
    const [isHover, setIsHover] = React.useState(false);
    const handleMouseEnter = () => { setIsHover(true) };
    const handleMouseLeave = () => { setIsHover(false) };

    return (
        <Box className={classes.root}>
            <Container maxWidth="lg" >
                <Box px={{ xs: 2, sm: 3, md: 4, lg: 0 }}>
                    <Grid container spacing={2} style={{ padding: "60px 0" }}>

                        <Grid item sm={12} md={4}>
                            <Grid item xs={12} paddingBottom={"10px"}>
                                <img style={{ width: '13rem' }} src={Cerebro} alt="Cerebro" className="margin-footer-l" />
                            </Grid>

                            <Grid item xs={12} paddingBottom={"10px"}>
                                <Grid container justifyContent="space-between">
                                    <Grid item xs={1}>
                                        <MdEmail size={22} color="gray" />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <label className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm margin-footer-s">info@cerebrohk.com</label>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item xs={12}>
                                <Grid container justifyContent="space-between">
                                    <Grid item xs={1}>
                                        <IoLocationSharp size={22} color="gray" />
                                    </Grid>
                                    <Grid item xs={11}>
                                        <label className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm margin-footer-s" >Unit F, 11/F, MG Tower, 133 Hoi Bun Road, Kwun Tong, Kowloon, Hong Kong</label>
                                    </Grid>
                                </Grid>
                            </Grid>

                        </Grid>

                        <Grid item sm={12} md={2}>

                            <Grid paddingTop={"15px"}>
                                <Grid item xs={12} paddingBottom={"20px"} sx={{ fontWeight: 'bold', display: { xs: "none", md: "block" } }}
                                    onClick={() => { navigate("/about") }} className="footer-hover">
                                    About Us
                                </Grid>

                                <Grid item xs={12} paddingBottom={"20px"} sx={{ fontWeight: 'bold', display: { xs: "none", md: "block" } }}>
                                    <HashLink smooth to={'/#our-clients'} style={{ textDecoration: "none" }} className="footer-hashlink-hover">
                                        Our Clients
                                    </HashLink>
                                </Grid>

                                <Grid item xs={12} sx={{ fontWeight: 'bold' }}>
                                    Follow Us
                                </Grid>
                                <div>
                                    <BsFacebook
                                        onClick={() => window.open('https://www.facebook.com/Cerebro-Strategy-Limited-103726845253451/', "_blank")}
                                        size="25"
                                        style={{ margin: '8px 8px 8px 0' }}
                                        class="fb-hover"
                                    />
                                    <svg width="0" height="0" >
                                        <radialGradient id="ig" r="150%" cx="30%" cy="107%">
                                            <stop stop-color="#fdf497" offset="0" />
                                            <stop stop-color="#fdf497" offset="0.05" />
                                            <stop stop-color="#fd5949" offset="0.45" />
                                            <stop stop-color="#d6249f" offset="0.6" />
                                            <stop stop-color="#285AEB" offset="0.9" />
                                        </radialGradient>
                                    </svg >
                                    <BsInstagram
                                        onClick={() => window.open('https://www.instagram.com/cerebrostrategylimited/', "_blank")}
                                        size="25"
                                        onMouseEnter={handleMouseEnter}
                                        onMouseLeave={handleMouseLeave}
                                        style={{ margin: '8px', fill: isHover ? "url(#ig)" : "gray", cursor: "pointer" }}
                                    />
                                    <BsYoutube
                                        onClick={() => window.open('https://www.youtube.com/channel/UCorXExRHKUKGoBsOtRZkzCQ/featured', "_blank")}
                                        size="25"
                                        style={{ margin: '8px' }}
                                        class="u2-hover"
                                    />
                                </div>

                            </Grid>

                        </Grid>

                        <Grid item sm={0} md={6}>
                            <Grid container padding={"15px"} sx={{ display: { xs: 'none', md: 'flex' } }}>
                                <Grid item xs={12} paddingBottom={"20px"} sx={{ fontWeight: 'bold' }}>
                                    Products & Services
                                </Grid>

                                <Grid container spacing={2}>
                                    <Grid item xs={6}
                                        onClick={() => { navigate("/product/Inspection") }}
                                        className="font-nunito-semibold color-grey letter-spacing-s font-size-px-sm footer-hover">

                                        DWSS - Cerebro Inspection

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
                </Box>
            </Container>
            <Divider />
            <Container maxWidth="lg">
                <Box px={{ xs: 2, sm: 3, md: 4, lg: 0 }}>
                    <Grid style={{ padding: '20px 10px 20px 0' }} container>
                        <Grid item xs={12} sm={8}>
                            <label className='font-size-px-sm color-grey'>© Cerebro Strategy Limited 2021. All Rights Reserved. </label>
                        </Grid>


                        <Grid item xs={6} sm={2}>
                            <a className={classes.tcpp} href={TC} target="_blank" rel="noreferrer">
                                <label style={{ marginLeft: "auto" }} className="font-nunito-regular font-size-px-sm footer-hover color-grey">
                                    Terms and Conditions
                                </label>
                            </a>
                        </Grid>

                        <Grid item xs={6} sm={2}>
                            <a className={classes.tcpp} href={PP} target="_blank" rel="noreferrer">
                                <label className="font-nunito-regular font-size-px-sm footer-hover color-grey">
                                    Privacy Policy
                                </label>
                            </a>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

        </Box>
    );
}