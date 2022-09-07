import * as React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Box } from '@mui/material';
import { Grid } from '@material-ui/core';
import './Products/Products.css';
import { RiComputerLine, RiSmartphoneLine } from "react-icons/ri";
import Demorequest from './Demorequeset';
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
    },
    btn: {
        'background-color': '#F1A039',
        'color': 'white',
        'font-size': '13px',
        'font-weight': 700,
        padding: '12px 47px',
        'border': 'none',
        'cursor': 'pointer',
        'border-radius': '5px',
        'text-align': 'center',
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
        <Box sx={{ flexGrow: 1 }}>
            <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }}>
                <div class="productsTitles" data-aos="fade-up">
                    <img src={props.icon} class="headerLogo" />
                    <div class="fullName">{props.type}</div>
                    <div style={{ 'padding-bottom': '20px' }}>{props.name}</div>
                    <div class="headerItems">
                        <Demorequest className={classes.btn} />
                        {/* <button class="btn" onClick={handleClickOpen}> Request a Demo</button> */}
                        <RiComputerLine class="icon1" display={props.desktop} />
                        <RiSmartphoneLine class="icon2" display={props.mobile} />
                    </div>
                </div>
            </div>

            <div style={{ padding: "60px 300px 30px" }}>

                <div class="subTitle" data-aos="fade-up">
                    <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "50px" }}>.</span><br />
                    Overview
                </div>
                <div class="contents" data-aos="fade-up">
                    {props.overview}
                </div>

                <div class="subTitle" data-aos="fade-up">
                    <span style={{ color: "#6561B2", fontWeight: "900", fontSize: "50px" }}>.</span><br />
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

                {/* <button class="btn-below" onClick={handleClickOpen}> Request a Demo</button> */}

            </div>
        </Box>
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
        <Box sx={{ flexGrow: 1 }}>
            <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }}>
                <div class="productsTitles" data-aos="fade-up">
                    <img src={props.icon} class="headerLogo" />
                    <div class="fullName">{props.type}</div>
                    <div style={{ 'padding-bottom': '20px' }}>{props.name}</div>
                    <div class="headerItems">
                        <Demorequest className={classes.btn} />
                        {/* <button class="btn" onClick={handleClickOpen}> Request a Demo</button> */}
                        <RiComputerLine class="icon1" display={props.desktop} />
                        <RiSmartphoneLine class="icon2" display={props.mobile} />
                    </div>
                </div>
            </div>

            <div style={{ padding: "60px 300px 30px" }}>

                <div class="subTitle" data-aos="fade-up">
                    <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "50px" }}>.</span><br />
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

                {/* <button class="btn-below" onClick={handleClickOpen}> Request a Demo</button> */}

            </div>
        </Box>
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
        <Box sx={{ flexGrow: 1 }}>
            <div class="imageContainer" style={{ backgroundImage: `url(${props.bg})` }}>
                <div class="productsTitles" data-aos="fade-up">
                    <img src={props.icon} class="headerLogo" />
                    <div class="fullName">{props.type}</div>
                    <div style={{ 'padding-bottom': '20px' }}>{props.name}</div>
                    <div class="headerItems">
                        <Demorequest className={classes.btn} />
                        {/* <button class="btn" onClick={handleClickOpen}> Request a Demo</button> */}
                        <RiComputerLine class="icon1" display={props.desktop} />
                        <RiSmartphoneLine class="icon2" display={props.mobile} />
                    </div>
                </div>
            </div>

            <div style={{ padding: "60px 300px 30px" }}>

                <div class="subTitle" data-aos="fade-up">
                    <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "50px" }}>.</span><br />
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
                    <span style={{ color: "#6561B2", fontWeight: "900", fontSize: "50px" }}>.</span><br />
                    Product Details
                </div>
                <div class="contents" data-aos="fade-up">
                    <div style={{ fontWeight: "700", paddingBottom: "40px", fontSize: "20px" }}>Compare User Roles</div>
                    <TableContainer sx={{ border: "none", boxShadow: "none" }} component={Paper} >
                        <Table aria-label="customized table">
                            <TableHead>
                                <TableRow >
                                    {props.tableHeaders.map((tableHeader) => (
                                        <TableCell sx={{ fontWeight: "900", border: "none", fontSize: "16px" }}>{tableHeader}</TableCell>
                                    ))}
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {props.tableList.map((table) => (
                                    <StyledTableRow key={table[0]}>
                                        <TableCell component="th" scope="row" sx={{ fontWeight: "900", border: "none", fontSize: "16px" }}>{table[0]}</TableCell>
                                        <TableCell align="left" sx={{ border: "none", fontSize: "17px" }}>{table[1] ? <TiTick /> : ""}</TableCell>
                                        <TableCell align="left" sx={{ border: "none", fontSize: "17px" }}>{table[2] ? <TiTick /> : ""}</TableCell>
                                        <TableCell align="left" sx={{ border: "none", fontSize: "17px" }}>{table[3] ? <TiTick /> : ""}</TableCell>
                                        <TableCell align="left" sx={{ border: "none", fontSize: "17px" }}>{table[4] ? <TiTick /> : ""}</TableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <div data-aos="fade-up">
                    <Demorequest className={classes.btnBelow} />
                </div>

                {/* <button class="btn-below" onClick={handleClickOpen}> Request a Demo</button> */}

            </div>
        </Box>
    )
};