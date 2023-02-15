import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Paper } from '@mui/material';
import { Container, Grid, Hidden } from '@mui/material';
import Image from '../assets/image/about_back.png';
import Logo from '../assets/image/logo_c.png';
import Marquee from "react-fast-marquee";
import Image1 from '../assets/image/appengine_a.png'
import Image2 from '../assets/image/cloudsql_a.png'
import Image3 from '../assets/image/aws_a.png'
import Image4 from '../assets/image/pwa.png'
import Image5 from '../assets/image/tesserect_a.png'
import Image6 from '../assets/image/gc_a.png'
import Image7 from '../assets/image/tensorflow_a.png'
import "../css/App.css"
import Aos from 'aos';
import { height } from '@mui/system';
import ScrollToTop from '../../ScrollToTop';

const useStyles = makeStyles({
    scrollingImages: {
        paddingRight: "90px",
        "height": "3rem",
        ["@media (max-width:899px)"]: {
            paddingRight: "50px",
            "height": "2rem",

        }
    },

    container: {
        position: 'relative',
        marginTop: "-20vw",
        // top: '20vw',
        // height: "calc(37vw + 700px)",
        ["@media (max-width:899px)"]: {
            // top: '280px',
            // height: "1030px",
            marginTop: "-140px",
        },
        // ["@media (max-width:623px)"]: {
        //     // top: '280px',
        //     // height: "1110px",
        //     marginTop:"-20vw",
        // }
    },

    aboutUs: {
        height: 'fit-content',
        marginBottom: "20vw",
        ["@media (max-width:899px)"]: {
            marginBottom: "200px",
        }
    },

    gridContainer: {
        marginBottom: "10vw",
        // ["@media (max-width:899px)"]: {
        //     marginBottom: "160px",

        // }
    },

    gridText: {
        lineHeight: '200%',
        paddingRight: "40px",
        ["@media (max-width:899px)"]: {
            lineHeight: '170%',
            paddingRight: "0px"
        }
    }
})

export default function About() {

    const classes = useStyles();

    //Animation
    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    return (
        <ScrollToTop>
            <Box>
                <Hidden mdDown>
                    <img src={Image} width={"100%"} />
                </Hidden>
                <Hidden mdUp>
                    <Grid style={{ height: '400px', backgroundColor: '#12043F' }} container alignItems='flex-end' />
                </Hidden>

                <Container maxWidth="lg" className={classes.container} >
                    <Box px={{ xs: 2, sm: 3, md: 4, lg: 0 }}>
                        <div className={classes.aboutUs} >
                            <div data-aos="fade-up"
                            // style={{ position: 'relative', top: '20vw' }}
                            >
                                <label style={{ fontSize: '3.5rem' }} className="font-montserrat-bold color-white">
                                    About Us
                                    <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "40px", paddingLeft: "20px" }}>.</span>
                                </label>
                            </div>
                            {/* <Hidden mdUp>
                        <Grid style={{ height: '40vh', backgroundColor: '#12043F' }} container alignItems='flex-end' >
                            <div data-aos="fade-up" style={{ paddingBottom: '5vh' }}>
                                <label style={{ fontSize: '3rem' }} className="font-montserrat-bold color-white letter-spacing-m font-size-rem-md">
                                    About Us
                                    <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "40px", paddingLeft: "20px" }}>.</span>
                                </label>
                            </div>
                        </Grid>
                    </Hidden> */}
                        </div>


                        <Grid container className={classes.gridContainer} justifyContent="space-between" alignItems="center" rowSpacing={3} data-aos="fade-up">
                            <Grid item sm={12} md={5}>
                                <img src={Logo} width={"250rem"} />
                            </Grid>
                            <Grid item sm={12} md={7}
                                className={classes.gridText}
                            >
                                Founded in 2019 and headquartered in Hong Kong,
                                Cerebro has been consistently expanding as an innovative solution provider.
                                With a sound background of construction and software development,
                                our 100% Hong Kong based in-house teams are fully equipped with the necessary skill
                                sets and experience to assist businesses in fostering digital transformation,
                                streamline business workflows and increase project quality.
                            </Grid>
                            <Grid item xs={12}>
                                <h1 style={{ fontWeight: "700", fontSize: "1.8rem" }}>
                                    <span style={{ color: "#6561B2", fontWeight: "900", fontSize: "40px" }}>.</span><br />
                                    Technologies we use
                                </h1>
                            </Grid>
                            <Grid item xs={12} style={{ paddingBottom: "50px" }} >
                                <Marquee pauseOnHover="ture" speed={90} gradientWidth={20}>
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
                </Container>
            </Box >
        </ScrollToTop>
    )
}