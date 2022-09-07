import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Paper } from '@mui/material';
import { Container, Grid, Hidden } from '@material-ui/core';
import Image from './assets/image/about_back.png';
import Logo from './assets/image/logo_c.png';
import Marquee from "react-fast-marquee";
import Image1 from './assets/image/appengine_a.png'
import Image2 from './assets/image/cloudsql_a.png'
import Image3 from './assets/image/aws_a.png'
import Image4 from './assets/image/pwa.png'
import Image5 from './assets/image/tesserect_a.png'
import Image6 from './assets/image/gc_a.png'
import Image7 from './assets/image/tensorflow_a.png'
import "../App.css"
import Aos from 'aos';

const useStyles = makeStyles({
    scrollingImages: {
        paddingRight: "100px"
    },
})

export default function About() {

    const classes = useStyles();

    //Animation
    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <Box>
            <div style={{ height: 'fit-content' }} >
                <Hidden xsDown>
                    <div className="About-Container" >
                        <div className="w-100" style={{ position: 'absolute' }}>
                            <Container maxWidth="lg">
                                <div data-aos="fade-up" style={{ position: 'relative', left: '4vw', top: '20vw' }}>
                                    <label style={{ fontSize: '7vmin' }} className="font-montserrat-bold color-white">
                                        About Us
                                        <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "40px", paddingLeft: "20px" }}>.</span>
                                    </label>
                                </div>
                            </Container>
                        </div>
                        <img src={Image} width={"100%"} />
                    </div>
                </Hidden>
                <Hidden smUp>
                    <Grid style={{ height: '40vh', backgroundColor: '#12043F' }} container alignItems='flex-end' >
                        <div data-aos="fade-up" style={{ paddingBottom: '5vh', paddingLeft: 'calc(24px + 5vw)' }}>
                            <label style={{ fontSize: '10vmin' }} className="font-montserrat-bold color-white letter-spacing-m font-size-rem-md">
                                About Us
                                <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "40px", paddingLeft: "20px" }}>.</span>
                            </label>
                        </div>
                    </Grid>
                </Hidden>
            </div>

            <Grid container spacing={2} style={{ padding: "120px" }} justifyContent="space-between" alignItems="center">
                <Grid item style={{ width: "300px" }}>
                    <div data-aos="fade-up" >
                        <img src={Logo} width={"100%"} />
                    </div>
                </Grid>
                <Grid item style={{ lineHeight: '200%', width: "70%", paddingRight: "40px" }}>
                    <div data-aos="fade-up" >
                        Founded in 2019 and headquartered in Hong Kong,
                        Cerebro has been consistently expanding as an innovative solution provider.
                        With a sound background of construction and software development,
                        our 100% Hong Kong based in-house teams are fully equipped with the necessary skill
                        sets and experience to assist businesses in fostering digital transformation,
                        streamline business workflows and increase project quality.
                    </div>
                </Grid>

                <Grid item
                    direction="row" className="technologies" style={{ padding: "7vw 4vw" }} alignItems="flex-end">
                    <Grid item data-aos="fade-up" >
                        <label className="color-black" style={{ fontSize: "40px", fontWeight: "bold" }}>
                            <span style={{ color: "#6561B2", fontWeight: "900", fontSize: "40px" }}>.</span><br />
                            Technologies we use
                        </label>
                    </Grid>
                </Grid>
                <Grid item style={{ width: "100%" }} data-aos="fade-up" >
                    <Marquee pauseOnHover="ture" speed={80}>
                        <img src={Image1} className={classes.scrollingImages} alt="" />
                        <img src={Image2} className={classes.scrollingImages} alt="" />
                        <img src={Image3} className={classes.scrollingImages} alt="" />
                        <img src={Image4} className={classes.scrollingImages} alt="" />
                        <img src={Image5} className={classes.scrollingImages} alt="" />
                        <img src={Image6} className={classes.scrollingImages} alt="" />
                        <img src={Image7} className={classes.scrollingImages} alt="" />
                    </Marquee>
                </Grid>
            </Grid>
        </Box>
    )
}