import * as React from 'react';
import { Box } from '@mui/system';
import { Card, Grid, TextField, Container, styled, Hidden } from '@mui/material';
import '../css/Contactus.css'
import Button from '@mui/material/Button';
import { MdEmail, MdLocationPin } from "react-icons/md";
import { AiFillPhone } from "react-icons/ai";
import Aos from 'aos';
import 'aos/dist/aos.css';
import ScrollToTop from '../../ScrollToTop';

const StyledTextField = styled(TextField)({
    "& label": {
        color: "white"
    },
    "& label.Mui-focused": {
        color: "white"
    },
    "& .MuiInput-underline:after": {
        borderBottomColor: "white"
    },
    "& .MuiOutlinedInput-root": {
        "& fieldset": {
            borderColor: "white"
        },
        "&:hover fieldset": {
            borderColor: "white",
            borderWidth: 1
        },
        "&.Mui-focused fieldset": {
            borderColor: "white"
        }
    }
});

export default function Contactus() {

    //Animation
    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <ScrollToTop>
            <Box>
                <Hidden mdDown>
                    <div class="contactBackground">
                        <Container maxWidth="lg" class="contactCard">
                            <Grid container justifyContent="space-between" paddingTop={"25px"}>
                                <Grid item xs={6} sx={{ borderRight: 1, borderColor: "white" }}>
                                    <Grid container spacing={3} paddingRight={"50px"}>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Name*" variant="outlined" fullWidth type="text"
                                                sx={{ input: { color: "white" } }} autoComplete="off"
                                                data-aos="fade-up" data-aos-delay="50" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Email*" variant="outlined" fullWidth type="email"
                                                sx={{ input: { color: "white" } }} autoComplete="off"
                                                data-aos="fade-up" data-aos-delay="100" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Phone Number*" variant="outlined" fullWidth type="text"
                                                sx={{ input: { color: "white" } }} autoComplete="off"
                                                data-aos="fade-up" data-aos-delay="150" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Company*" variant="outlined" fullWidth type="text"
                                                sx={{ input: { color: "white" } }} autoComplete="off"
                                                data-aos="fade-up" data-aos-delay="200" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Position*" variant="outlined" fullWidth type="text"
                                                sx={{ input: { color: "white" } }} autoComplete="off"
                                                data-aos="fade-up" data-aos-delay="250" data-aos-anchor-placement="top-bottom" />
                                        </Grid>
                                        <Grid item xs={12}>
                                            <StyledTextField label="Message*" variant="outlined" fullWidth type="text" multiline={true} rows={3}
                                                inputProps={{ style: { color: "white" } }} autoComplete="off"
                                                data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-bottom" />
                                        </Grid>
                                    </Grid>
                                    <Grid item padding={'30px 0 50px'} data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
                                        <Button variant="contained" onClick={{}} style={{ backgroundColor: "#6561B2", padding: "8px 70px", marginRight: "auto", borderRadius: "25px" }}>SEND</Button>
                                    </Grid>
                                </Grid>

                                <Grid item xs={6}>
                                    <div class="rightContentsHeader" data-aos="fade-up" data-aos-delay="50">
                                        Contact Us
                                        <span style={{ color: "#F1A039", fontWeight: "700", fontSize: "50px", paddingLeft: "10px" }}>.</span>
                                    </div>

                                    <div class="rightContents">
                                        <Grid class="rightContentsSubTitle" data-aos="fade-up" data-aos-delay="100">
                                            General Inquiries
                                        </Grid>
                                        <Grid container data-aos="fade-up" data-aos-delay="150">
                                            <Grid item xs={2}><MdEmail class="icons" size={25} /></Grid>
                                            <Grid item xs={9} color="white">info@cerebrohk.com</Grid>
                                        </Grid>
                                        <Grid container data-aos="fade-up" data-aos-delay="200">
                                            <Grid item xs={2}><AiFillPhone class="icons" size={25} /></Grid>
                                            <Grid item xs={9} color="white">852 9459 9679</Grid>
                                        </Grid>
                                    </div>

                                    <div class="rightContents">
                                        <Grid class="rightContentsSubTitle" data-aos="fade-up" data-aos-delay="250">
                                            Office
                                        </Grid>
                                        <Grid container data-aos="fade-up" data-aos-delay="300">
                                            <Grid item xs={2} size={25}><MdLocationPin class="icons" size={25} /></Grid>
                                            <Grid item xs={9} color="white">Unit F, 11/F, MG Tower, 133 Hoi Bun Road,
                                                Kwun Tong, Kowloon, Hong Kong</Grid>
                                        </Grid>
                                    </div>

                                </Grid>
                            </Grid >
                        </Container >
                    </div>
                </Hidden>

                <Hidden mdUp>
                    <div class="contactBackground">
                        <Container class="contactCard">
                            <Grid container spacing={2} justifyContent="space-between" paddingTop={"25px"}>
                                <Grid item xs={12}>
                                    <StyledTextField label="Name*" variant="outlined" fullWidth type="text"
                                        sx={{ input: { color: "white" } }} autoComplete="off"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Email*" variant="outlined" fullWidth type="email"
                                        sx={{ input: { color: "white" } }} autoComplete="off"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Phone Number*" variant="outlined" fullWidth type="text"
                                        sx={{ input: { color: "white" } }} autoComplete="off"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Company*" variant="outlined" fullWidth type="text"
                                        sx={{ input: { color: "white" } }} autoComplete="off"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Position*" variant="outlined" fullWidth type="text"
                                        sx={{ input: { color: "white" } }} autoComplete="off"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Message*" variant="outlined" fullWidth type="text" multiline={true} rows={3}
                                        inputProps={{ style: { color: "white" } }} autoComplete="off"
                                    />
                                </Grid>
                            </Grid>
                            <Grid item padding={'10px 0 50px'}>
                                <Button variant="contained" onClick={{}} style={{ backgroundColor: "#6561B2", padding: "8px 70px", marginRight: "auto", borderRadius: "25px" }}>SEND</Button>
                            </Grid>
                        </Container >
                    </div>

                    <div style={{ background: "#12043f", paddingBottom: "40px" }}>
                        <div style={{ padding: "0 50px" }}>
                            <div class="rightContentsHeader">
                                Contact Us
                                <span style={{ color: "#F1A039", fontWeight: "700", fontSize: "50px", paddingLeft: "10px" }}>.</span>
                            </div>

                            <div class="rightContents">
                                <Grid class="rightContentsSubTitle">
                                    General Inquiries
                                </Grid>
                                <Grid container>
                                    <Grid item xs={2}><MdEmail class="icons" size={25} /></Grid>
                                    <Grid item xs={9} color="white">info@cerebrohk.com</Grid>
                                </Grid>
                                <Grid container>
                                    <Grid item xs={2}><AiFillPhone class="icons" size={25} /></Grid>
                                    <Grid item xs={9} color="white">852 9459 9679</Grid>
                                </Grid>
                            </div>

                            <div class="rightContents">
                                <Grid class="rightContentsSubTitle">
                                    Office
                                </Grid>
                                <Grid container>
                                    <Grid item xs={2} size={25}><MdLocationPin class="icons" size={25} /></Grid>
                                    <Grid item xs={9} color="white">Unit F, 11/F, MG Tower, 133 Hoi Bun Road,
                                        Kwun Tong, Kowloon, Hong Kong</Grid>
                                </Grid>
                            </div>
                        </div>
                    </div>
                </Hidden>
            </Box>
        </ScrollToTop>
    )
}