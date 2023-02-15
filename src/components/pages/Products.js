import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid } from '@mui/material';
import '../css/Products.css';
import { RiComputerLine, RiSmartphoneLine } from "react-icons/ri";
import Demorequest from '../elements/Demorequeset';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TiTick } from "react-icons/ti";
import Aos from 'aos';
import ScrollToTop from '../../ScrollToTop';

const useStyles = makeStyles({
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
    btn: {
        'background-color': '#F1A039',
        'color': 'white',
        'font-size': '13px',
        'font-weight': 700,
        padding: '10px 70px',
        'border': 'none',
        'cursor': 'pointer',
        'border-radius': '5px',
        'text-align': 'center',
        ["@media (max-width:899px)"]: {
            padding: '7px 90px',
            "margin-bottom": "5px"
        }
    }
})

export const ProductsStyle1 = (props) => {

    const classes = useStyles();

    //Animation
    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    //Request a Demo
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <ScrollToTop>
            <Box>
                <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }} />

                <Container maxWidth="lg" style={{ marginTop: "-400px" }}>
                    <Box px={{ xs: 2, sm: 3, md: 4, lg: 0 }}>
                        <div container class="productsTitles" data-aos="fade-up">
                            <img src={props.icon} class="headerLogo" />
                            <div class="fullName">{props.type}</div>
                            <div class="shortName">{props.name}</div>
                            <Grid container alignItems="center" >
                                <Grid item xs={12} sm={12} md={8}>
                                    <Demorequest className={classes.btn} />
                                </Grid>
                                <Grid item xs={8} sm={8} sx={{ display: { xs: 'flex', md: 'none' } }} />
                                <Grid item xs={4} sm={4} md={4} class="products-icons">
                                    <Grid container justifyContent="flex-start" alignItems="center" spacing={4}>
                                        <Grid item xs={4}>
                                            <RiComputerLine display={props.desktop} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <RiSmartphoneLine display={props.mobile} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="textContainer">

                            <div class="subTitle" data-aos="fade-up">
                                <span class="titleDot" style={{ color: "#F1A039", fontWeight: "900" }}>.</span><br />
                                Overview
                            </div>
                            <div class="contents" data-aos="fade-up">
                                {props.overview}
                            </div>

                            <div class="subTitle" data-aos="fade-up">
                                <span class="titleDot" style={{ color: "#6561B2", fontWeight: "900" }}>.</span><br />
                                Product Details
                            </div>
                            <div class="contents">
                                <Grid container alignItems="center" direction="row-reverse" justifyContent="space-between" data-aos="fade-up">
                                    <Grid item lg={0.5}></Grid>
                                    <Grid item sm={12} lg={4}>
                                        <div class="subSubTitle">{props.detailTitle1}</div>
                                        <div>{props.detailDes1}</div>
                                    </Grid>
                                    <Grid item sm={12} lg={6}><img src={props.detailImage1} class="contentImage" /></Grid>
                                </Grid>

                                <Grid container alignItems="center" justifyContent="space-between" data-aos="fade-up">
                                    <Grid item lg={0.5}></Grid>
                                    <Grid item sm={12} lg={4}>
                                        <div class="subSubTitle">{props.detailTitle2}</div>
                                        <div>{props.detailDes2}</div>
                                    </Grid>
                                    <Grid item sm={12} lg={6}><img src={props.detailImage2} class="contentImage" /></Grid>
                                </Grid>

                                <Grid container alignItems="center" direction="row-reverse" justifyContent="space-between" data-aos="fade-up">
                                    <Grid item lg={0.5}></Grid>
                                    <Grid item sm={12} lg={4}>
                                        <div class="subSubTitle">{props.detailTitle3}</div>
                                        <div>{props.detailDes3}</div>
                                    </Grid>
                                    <Grid item sm={12} lg={6}><img src={props.detailImage3} class="contentImage" /></Grid>
                                </Grid>

                                <Grid container alignItems="center" justifyContent="space-between" data-aos="fade-up">
                                    <Grid item lg={0.5}></Grid>
                                    <Grid item sm={12} lg={4}>
                                        <div class="subSubTitle">{props.detailTitle4}</div>
                                        <div>{props.detailDes4}</div>
                                    </Grid>
                                    <Grid item sm={12} lg={6}><img src={props.detailImage4} class="contentImage" /></Grid>
                                </Grid>
                            </div>
                            <div data-aos="fade-up">
                                <Demorequest className={classes.btnBelow} />
                            </div>
                        </div>
                    </Box>
                </Container>
            </Box>
        </ScrollToTop >
    )
};

export const ProductsStyle2 = (props) => {

    const classes = useStyles();

    //Animation
    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    //Request a Demo
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <ScrollToTop>
            <Box>
                {/* <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }}>
                    <div class="productsTitles" data-aos="fade-up">
                        <img src={props.icon} class="headerLogo" />
                        <div class="fullName">{props.type}</div>
                        <div style={{ 'padding-bottom': '20px' }}>{props.name}</div>
                        <div class="headerItems">
                            <Demorequest className={classes.btn} />
                            <div class="products-icons">
                                <RiComputerLine class="icon1" display={props.desktop} />
                                <RiSmartphoneLine class="icon2" display={props.mobile} />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }} />

                <Container maxWidth="lg" style={{ marginTop: "-400px" }}>
                    <Box px={{ xs: 2, sm: 3, md: 4, lg: 0 }}>
                        <div container class="productsTitles" data-aos="fade-up">
                            <img src={props.icon} class="headerLogo" />
                            <div class="fullName">{props.type}</div>
                            <div class="shortName">{props.name}</div>
                            <Grid container alignItems="center" >
                                <Grid item xs={12} sm={12} md={8}>
                                    <Demorequest className={classes.btn} />
                                </Grid>
                                <Grid item xs={8} sm={8} sx={{ display: { xs: 'flex', md: 'none' } }} />
                                <Grid item xs={4} sm={4} md={4} class="products-icons">
                                    <Grid container justifyContent="flex-start" alignItems="center" spacing={4}>
                                        <Grid item xs={4}>
                                            <RiComputerLine display={props.desktop} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <RiSmartphoneLine display={props.mobile} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>

                        <div class="textContainer">

                            <div class="subTitle" data-aos="fade-up">
                                <span class="titleDot" style={{ color: "#F1A039", fontWeight: "900" }}>.</span><br />
                                Overview
                            </div>
                            <div class="contents" data-aos="fade-up">
                                <Grid container alignItems="center" direction="row-reverse" justifyContent="space-between">
                                    <Grid item sm={12} lg={6}>
                                        <div>{props.overview}</div>
                                    </Grid>
                                    <Grid item sm={12} lg={6}><img src={props.image} class="contentImage" /></Grid>
                                </Grid>

                            </div>

                            <div data-aos="fade-up">
                                <Demorequest className={classes.btnBelow} />
                            </div>

                        </div>
                    </Box>
                </Container>
            </Box>
        </ScrollToTop>
    )
};

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: "rgb(101, 97, 178,0.1)",
    },
}));

export const ProductsStyle3 = (props) => {

    const classes = useStyles();

    //Animation
    React.useEffect(() => {
        Aos.init({ duration: 1000 });
    }, []);

    //Request a Demo
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };

    return (
        <ScrollToTop>
            <Box>
                {/* <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }}>
                    <div class="productsTitles" data-aos="fade-up">
                        <img src={props.icon} class="headerLogo" />
                        <div class="fullName">{props.type}</div>
                        <div style={{ 'padding-bottom': '20px' }}>{props.name}</div>
                        <div class="headerItems">
                            <Demorequest className={classes.btn} />
                            <div class="products-icons">
                                <RiComputerLine class="icon1" display={props.desktop} />
                                <RiSmartphoneLine class="icon2" display={props.mobile} />
                            </div>
                        </div>
                    </div>
                </div> */}
                <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }} />

                <Container maxWidth="lg" style={{ marginTop: "-400px" }}>
                    <Box px={{ xs: 2, sm: 3, md: 4, lg: 0 }}>
                        <div container class="productsTitles" data-aos="fade-up">
                            <img src={props.icon} class="headerLogo" />
                            <div class="fullName">{props.type}</div>
                            <div class="shortName">{props.name}</div>
                            <Grid container alignItems="center" >
                                <Grid item xs={12} sm={12} md={8}>
                                    <Demorequest className={classes.btn} />
                                </Grid>
                                <Grid item xs={8} sm={8} sx={{ display: { xs: 'flex', md: 'none' } }} />
                                <Grid item xs={4} sm={4} md={4} class="products-icons">
                                    <Grid container justifyContent="flex-start" alignItems="center" spacing={4}>
                                        <Grid item xs={4}>
                                            <RiComputerLine display={props.desktop} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <RiSmartphoneLine display={props.mobile} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </div>


                        <div class="textContainer">

                            <div class="subTitle" data-aos="fade-up">
                                <span class="titleDot" style={{ color: "#F1A039", fontWeight: "900" }}>.</span><br />
                                Overview
                            </div>
                            <div class="contents" data-aos="fade-up">
                                <Grid container alignItems="center" direction="row-reverse" justifyContent="space-between">
                                    <Grid item sm={12} lg={6}>
                                        <div>{props.overview}</div>
                                    </Grid>
                                    <Grid item sm={12} lg={6}><img src={props.image} class="contentImage" /></Grid>
                                </Grid>
                            </div>

                            <div class="subTitle" data-aos="fade-up">
                                <span class="titleDot" style={{ color: "#6561B2", fontWeight: "900" }}>.</span><br />
                                Product Details
                            </div>
                            <div class="contents" data-aos="fade-up">
                                <div class="tableSubTitle">Compare User Roles</div>
                                <TableContainer sx={{ border: "none", boxShadow: "none" }} component={Paper} >
                                    <Table aria-label="customized table">
                                        <TableHead>
                                            <TableRow >
                                                {props.tableHeaders.map((tableHeader) => (
                                                    <TableCell class="tableHeader">{tableHeader}</TableCell>
                                                ))}
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {props.tableList.map((table) => (
                                                <StyledTableRow key={table[0]}>
                                                    <TableCell component="th" scope="row" class="tableHeader">{table[0]}</TableCell>
                                                    <TableCell align="center" sx={{ border: "none", fontSize: "17px" }}>{table[1] ? <TiTick /> : ""}</TableCell>
                                                    <TableCell align="center" sx={{ border: "none", fontSize: "17px" }}>{table[2] ? <TiTick /> : ""}</TableCell>
                                                    <TableCell align="center" sx={{ border: "none", fontSize: "17px" }}>{table[3] ? <TiTick /> : ""}</TableCell>
                                                    <TableCell align="center" sx={{ border: "none", fontSize: "17px" }}>{table[4] ? <TiTick /> : ""}</TableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </div>

                            <div data-aos="fade-up">
                                <Demorequest className={classes.btnBelow} />
                            </div>
                        </div>
                    </Box>
                </Container>
            </Box>
        </ScrollToTop >
    )
};