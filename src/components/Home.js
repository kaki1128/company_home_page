import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/styles';
import { Box, Grid, Button, Card, CardContent, CardMedia, Typography, CardActionArea, Chip, Slide } from '@mui/material';
import { Container } from "@mui/system";
import backgroundVideo from "./assets/video/demo.mp4";
import CITF from "./assets/image/first_page_icon@2x.png";
import analysis from "./assets/image/test1@2x.png";
import development from "./assets/image/test2@2x.png"
import support from "./assets/image/test3@2x.png"
import process from "./assets/image/process.png";
import products from "./Products/ProductsList";
import client1 from "./assets/image/partner1.png";
import client2 from "./assets/image/partner2.png";
import client3 from "./assets/image/partner3.png";
import client4 from "./assets/image/partner4.png";
import client5 from "./assets/image/partner5.png";
import client6 from "./assets/image/partner6.png";
import "./Home.css";
import Demorequest from "./Demorequeset";
import { RiComputerLine, RiSmartphoneLine } from "react-icons/ri";
import { useInView } from "react-intersection-observer";
import { HashLink } from "react-router-hash-link";
import Aos from "aos";
import { Hidden } from "@material-ui/core";
import Typist from "react-typist-component";


const useStyles = makeStyles({
    btn: {
        'background-color': '#6561B2',
        'color': '#ffffff',
        'font-size': '13px',
        'font-weight': '700',
        'padding': '6px 60px',
        'border': 'none',
        'cursor': 'pointer',
        'border-radius': '5px',
        'text-align': 'center',
        'margin': 'auto',
        'display': 'block',
    },

    productCards: {
        "&:hover": {
            "transform": "translateY(-3px)",
            "transition": "transform 300ms"
        }
    },
})

const WhatWeDos = [
    {
        title: "Analysis",
        des: "Every project is different, so as the solution. Our experts are committed to analyze every case, communicate proactively with the customers, identify the underlying digital needs and provide the best yet appropriate solution to our customers.",
        img: analysis,
        bgColor: '#6561B2',
        wdColor: "#FFFFFF",
        filterColor: "brightness(0.9)",
        dotColor: "#F1A039",
    },
    {
        title: "Development",
        des: "With a significant background of construction and technology, our professionals will be involved in the entire development process from sketch to delivery, making sure the platforms fully adhere to customers’ expectations and their site practice.",
        img: development,
        bgColor: '#F1A039',
        wdColor: "#FFFFFF",
        filterColor: "brightness(0.9)",
        dotColor: "#12043f",
    },
    {
        title: "After Sales Support",
        des: "Our platforms aren’t the only thing we greatly value – user experience is the key to maintain a sustainable platform. Our support team will be happy to assist users with any difficulties arising from using Cerebro platforms, ensuring a smooth user experience.",
        img: support,
        bgColor: '#FFFFFF',
        wdColor: "#000000",
        filterColor: "opacity(0.4)",
        dotColor: "#6561B2",
    },
];

export const WhatWeDoCards = (props) => {
    //Hover Animation
    const [isHover, setIsHover] = useState(false);
    const handleMouseEnter = () => { setIsHover(true) };
    const handleMouseLeave = () => { setIsHover(false) };

    //Animation
    React.useEffect(() => {
        Aos.init({ duration: 1500 });
    }, []);

    return (
        <Grid item xs={12} sm={4}>
            <Card sx={{ display: 'flex', height: "230px", borderRadius: "10px", boxShadow: 10 }} style={{ backgroundColor: isHover ? "white" : props.bgColor }}
                onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                <CardContent>
                    <Typography gutterBottom component="div" hidden={isHover}
                        style={{ color: props.wdColor, fontWeight: 900, paddingTop: "80px", fontSize: "20px" }} >
                        {props.title}<span style={{ paddingLeft: "5px", fontSize: "25px", color: props.dotColor }}>.</span>
                    </Typography>

                    {isHover && (
                        <Slide direction="left" in={isHover}>
                            <Grid container direction="row" justifyContent="space-between" alignItems="flex-start">
                                <Grid item xs={3}>
                                    <img src={props.img} style={{ position: 'relative', height: "200px", right: '7vw' }} />
                                </Grid>
                                <Grid item xs={8}>
                                    <div style={{ fontSize: "15px", fontWeight: "900", paddingBottom: "10px" }}>
                                        {props.title}
                                        <span style={{ paddingLeft: "5px", fontSize: "25px", color: props.dotColor }}>.</span>
                                    </div>
                                    <div style={{ fontSize: "12px", lineHeight: "1.65" }}>{props.des}</div>
                                </Grid>
                            </Grid>
                        </Slide>
                    )}
                </CardContent>
                <img src={props.img} style={{ filter: props.filterColor, position: 'relative', left: '4vw' }} hidden={isHover} />
            </Card>
        </Grid>
    )
}

export default function App() {

    const classes = useStyles();

    //Dots Style
    const { ref: refSection1, inView: inViewSection1 } = useInView();
    const { ref: refSection2, inView: inViewSection2 } = useInView();
    const { ref: refSection3, inView: inViewSection3 } = useInView();
    const { ref: refSection4, inView: inViewSection4 } = useInView();
    const { ref: refSection5, inView: inViewSection5 } = useInView();

    //Products Tags click
    const handleClick = () => { console.info('You clicked the Chip.') };

    return (
        <Box>
            <Hidden mdDown>
                <div style={{ position: 'absolute', zIndex: 10000, left: '3vw', bottom: '340px' }} >
                    <div style={{ position: 'fixed', justifyContent: 'center', alignContent: 'center', height: '340px  ' }} >
                        <HashLink smooth to={'/#intro'} style={{ textDecoration: "none" }}>
                            <div className={inViewSection1 ? "Dot-Font-active " : "Dot-Font"} >.</div>
                        </HashLink>
                        <HashLink smooth to={'/#mission'} style={{ textDecoration: "none" }}>
                            <div className={inViewSection2 ? (inViewSection1 ? "Dot-Font" : "Dot-Font-active ") : "Dot-Font"}>.</div>
                        </HashLink>
                        <HashLink smooth to={'/#products'} style={{ textDecoration: "none" }}>
                            <div className={inViewSection3 ? (inViewSection2 ? "Dot-Font" : (inViewSection4 ? "Dot-Font" : "Dot-Font-active ")) : "Dot-Font"}>.</div>
                        </HashLink>
                        <HashLink smooth to={'/#our-clients'} style={{ textDecoration: "none" }}>
                            <div className={inViewSection4 ? "Dot-Font-active " : "Dot-Font"}>.</div>
                        </HashLink>
                        <div className={inViewSection5 ? "line-decoration-none" : "line-decoration"} />
                    </div>
                </div>
            </Hidden>

            <div class="videoSection" background="" ref={refSection1} id="intro">
                <div class="videoFilter"></div>
                <div class="video-container">
                    <video autoPlay muted loop id="myVideo" >
                        <source src={backgroundVideo} type="video/mp4"></source>
                    </video>

                </div>
                <div class="videoText">

                    <Typist>
                        <div class="videoTextTitle">
                            Initiate <br></br>Possibilities <span style={{ color: "#F1A039", paddingLeft: "10px" }}>.</span>
                        </div>
                    </Typist>

                    <Grid container >
                        <Grid item class="videoTextContent1" data-aos="fade-up" data-aos-delay="300">
                            We are your trusted software engineering partner, with the leverage of smart innovations and cloud technologies, empowering businesses to achieve more in the digital acceleration.
                        </Grid>
                        <Grid item class="videoTextContent2">
                            <Grid container sx={{ pt: 7 }} direction="row"
                                justifyContent="flex-start"
                                alignItems="center">
                                <Grid item xs={4} data-aos="fade-up" data-aos-delay="400">
                                    <img src={CITF} class="citf" />
                                </Grid>
                                <Grid item xs={8} data-aos="fade-up" data-aos-delay="500">
                                    Cerebro Inspection is pre-approved by
                                    the Construction Innovation & Technology Fund (CITF)
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>


            <div style={{ background: "#12043f" }} ref={refSection2}>
                <div class="mission">
                    <div id="mission"></div>
                    <h1 data-aos="fade-up">Our Mission</h1>
                    <h2 style={{ color: "#F1A039", fontSize: "50px" }} data-aos="fade-up">"</h2>
                    <p data-aos="fade-up">At Cerebro, dedication to optimize construction efficiency and quality are more than just business imperatives – we aim to connect traditional construction practice to Construction 2.0, a technological transformation for the industry.</p>
                </div>
            </div>

            <Container sx={{ p: 4 }} >
                <div>
                    <div ref={refSection2}>
                        <h1 data-aos="fade-up"><span style={{ color: "#F1A039", fontWeight: "900", fontSize: "50px" }}>.</span><br />What we do?</h1>
                        <p data-aos="fade-up">We offer industry-specific solutions from software applications to intelligent 3D modelling, with customization services to ensure our solutions are in compliance with industry standards as well as meeting your unique business needs.</p>
                        <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={4} style={{ padding: "60px 0" }} data-aos="fade-up">
                            {WhatWeDos.map(WhatWeDo => (
                                <WhatWeDoCards bgColor={WhatWeDo.bgColor} wdColor={WhatWeDo.wdColor} title={WhatWeDo.title} img={WhatWeDo.img} des={WhatWeDo.des} filterColor={WhatWeDo.filterColor} dotColor={WhatWeDo.dotColor} />
                            ))}
                        </Grid>

                        <h2 data-aos="fade-up">Our Customization Process:</h2>
                        <p data-aos="fade-up">Our customization process is structured yet flexible to deliver solutions that are best aligned with your unique needs.</p>
                    </div>
                    <img src={process} class="processImg" data-aos="fade-up" />
                </div>

                <div ref={refSection3}>
                    <Grid container direction="row" justifyContent="space-between" alignItems="flex-end" data-aos="fade-up">
                        <Grid item xs={8} id="products">
                            <h1 style={{ paddingTop: "50px" }}>
                                <span style={{ color: "#6561B2", fontWeight: "900", fontSize: "50px" }}>.</span><br />
                                Products & Services
                            </h1>
                        </Grid>
                        <Grid item xs={4} marginBottom="30px">
                            <Demorequest className={classes.btn} />
                        </Grid>
                    </Grid>


                    <Grid container item spacing={3}>
                        {products.map(product => (
                            <Grid item xs={12} sm={6} md={4}>
                                <Card sx={{ height: 400, borderRadius: 4 }} className={classes.productCards} data-aos="fade-up">
                                    <CardActionArea sx={{ height: "100%" }}>
                                        <CardMedia component="img" image={product.img} style={{ backgroundColor: product.bgColor }} sx={{ position: "absolute", top: 0 }} />

                                        <CardContent sx={{ pt: 20 }}>
                                            <Typography gutterBottom variant="h7" component="div">
                                                {product.type}
                                            </Typography>

                                            <RiComputerLine size={20} class="productsIconComputer" display={product.Desktop} />
                                            <RiSmartphoneLine size={20} class="productsIconPhone" display={product.Mobile} />

                                            <Typography gutterBottom variant="h6" component="div">
                                                {product.className}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                                {product.des}
                                            </Typography>

                                            <div style={{ padding: "10px 0" }}>Tags:</div>


                                            {product.tags.map(tag => (
                                                <Chip label={tag} variant="outlined" sx={{ margin: "5px 5px 5px 0" }} size="small" className={classes.productCards} onClick={handleClick} />))}

                                        </CardContent>
                                    </CardActionArea>
                                </Card>
                            </Grid>))}
                    </Grid>

                </div>

                <div id="our-clients" ref={refSection4}>
                    <h1 style={{ paddingTop: "110px" }} data-aos="fade-up">
                        <span style={{ color: "#12043f", fontWeight: "900", fontSize: "50px" }}>.</span><br />
                        Our Clients
                    </h1>
                    <Grid container direction="row" justifyContent="space-between" alignItems="center" spacing={6} >

                        <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                            <img src={client1} width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                            <img src={client2} width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                            <img src={client3} width="100%" />
                        </Grid>


                        <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                            <img src={client4} width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                            <img src={client5} width="100%" />
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} data-aos="fade-up">
                            <img src={client6} width="100%" />
                        </Grid>
                    </Grid>

                </div>
            </Container>
            <div ref={refSection5} style={{ padding: "40px" }} />
        </Box >
    );
}