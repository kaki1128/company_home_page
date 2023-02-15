import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { useState } from 'react';
import { Container, Grid, Hidden } from '@mui/material';
import { deepPurple } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { styled } from '@mui/material';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const StyledTextField = styled(TextField)({
    "& label.Mui-focused": {
        color: "#6561B2"
    },
    "& .MuiOutlinedInput-root": {
        "&:hover fieldset": {
            borderColor: "#6561B2",
            borderWidth: 2
        },
        "&.Mui-focused fieldset": {
            borderColor: "#6561B2"
        }
    }
});

export default function Demorequest(props) {

    //Request a Demo
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => { setOpen(true); };
    const handleClose = () => { setOpen(false); };


    return (
        <>
            <button className={props.className} onClick={() => setOpen(true)}>Request a Demo</button>
            <Hidden mdDown>
                <Dialog
                    open={open} onClose={handleClose}
                    sx={{
                        "& .MuiDialog-container": {
                            "& .MuiPaper-root": {
                                width: "100%",
                                maxWidth: "1200px",  // Set width here
                                height: "100%",
                                maxHeight: "950px"
                            },
                        },
                    }}>
                    <div style={{ padding: "0 20px 30px" }}>
                        <DialogTitle style={{ "font-size": "40px", "font-weight": "bold", paddingTop: "60px" }}>Request a Demo</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <div style={{ padding: "20px 0 30px" }}>
                                    Request a demo to get started with Cerebro Products & Services
                                </div>
                            </DialogContentText>
                            <Grid container spacing={3}>
                                <Grid item xs={12}>
                                    <StyledTextField label="Name*" variant="outlined" fullWidth type="text" />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField label="Email*" variant="outlined" fullWidth type="email" />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField label="Phone Number*" variant="outlined" fullWidth type="text" />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField label="Company*" variant="outlined" fullWidth type="text" />
                                </Grid>
                                <Grid item xs={6}>
                                    <StyledTextField label="Position*" variant="outlined" fullWidth type="text" />
                                </Grid>
                            </Grid>
                            <div style={{ padding: "40px 0 15px", color: "#6561B2", fontWeight: "700" }}>Interested Products & Services</div>
                            <div>
                                <Grid container spacing={0}>
                                    <Grid item xs={3}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>DWSS - Cerebro Inspection</label>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>DWSS - Cerebro Diary</label>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>Electronic Document Management System - Cerebro Project</label>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>BIM</label>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>Cerebro Analyse</label>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>Knowledge Management System</label>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>Cerebro Procurement</label>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>Photo Registration</label>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Checkbox {...label} color="neutral" />
                                        <label>Signature App</label>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ paddingTop: "20px" }}>
                                <StyledTextField label="Message*" variant="outlined" fullWidth type="text" margin="normal"
                                    multiline={true} rows={3} />
                            </div>
                        </DialogContent>
                        <DialogActions style={{ paddingLeft: "20px" }}>
                            <Button variant="contained" onClick={handleClose} style={{ backgroundColor: "#6561B2", padding: "8px 70px", marginRight: "auto", borderRadius: "25px" }}>SEND</Button>
                        </DialogActions>
                    </div>
                </Dialog>
            </Hidden>

            <Hidden mdUp>
                <Dialog
                    open={open} onClose={handleClose}
                    sx={{
                        "& .MuiDialog-container": {
                            "& .MuiPaper-root": {
                                width: "100%",
                                maxWidth: "1200px",  // Set width here
                                height: "100%",
                                maxHeight: "950px"
                            },
                        },
                    }}>
                    <div style={{ padding: "0 10px 15px" }}>
                        <DialogTitle style={{ "font-size": "6vw", "font-weight": "bold", paddingTop: "25px" }}>Request a Demo</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                <div style={{ padding: "5px 0 15px", "font-size": "3.5vw" }}>
                                    Request a demo to get started with Cerebro Products & Services
                                </div>
                            </DialogContentText>
                            <Grid container spacing={1}>
                                <Grid item xs={12}>
                                    <StyledTextField label="Name*" variant="outlined" fullWidth type="text" />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Email*" variant="outlined" fullWidth type="email" />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Phone Number*" variant="outlined" fullWidth type="text" />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Company*" variant="outlined" fullWidth type="text" />
                                </Grid>
                                <Grid item xs={12}>
                                    <StyledTextField label="Position*" variant="outlined" fullWidth type="text" />
                                </Grid>
                            </Grid>
                            <div style={{ padding: "25px 0 15px", color: "#6561B2", fontWeight: "700" }}>Interested Products & Services</div>
                            <div>
                                <Grid container spacing={0}>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>DWSS - Cerebro Inspection</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>DWSS - Cerebro Diary</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>Electronic Document Management System - Cerebro Project</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>BIM</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>Cerebro Analyse</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>Knowledge Management System</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>Cerebro Procurement</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>Photo Registration</label>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox {...label} color="neutral" />
                                        <label style={{"font-size": "2.5vw" }}>Signature App</label>
                                    </Grid>
                                </Grid>
                            </div>
                            <div style={{ paddingTop: "10px" }}>
                                <StyledTextField label="Message*" variant="outlined" fullWidth type="text" margin="normal"
                                    multiline={true} rows={3} />
                            </div>
                        </DialogContent>
                        <DialogActions style={{ paddingLeft: "20px" }}>
                            <Button variant="contained" onClick={handleClose} style={{ backgroundColor: "#6561B2", padding: "8px 70px", marginRight: "auto", borderRadius: "25px" }}>SEND</Button>
                        </DialogActions>
                    </div>
                </Dialog>
            </Hidden>
        </>
    )
}