import React, { useState } from "react";
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid, TextField, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';

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

const useStyles = makeStyles({
    dataResult: {
        "padding": "60px calc(24px + 9vw)",
    },

    dataItemTitle: {
        fontSize: "30px",
        textDecoration: "none",
        color: "#12043F",
        fontWeight: "800",
    },

    dataItem: {
        fontSize: "13px",
        paddingBottom: "50px",
        paddingTop: "5px",
    },
})

export default function Search({ placeholder, data }) {
    const classes = useStyles();

    const [searchParams, setSearchParams] = useSearchParams();

    const [filteredData, setFilteredData] = useState([]);
    const [wordEntered, setWordEntered] = useState("");


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.title.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <Box>
            <div style={{ height: '500px', backgroundColor: '#12043F' }} >
                <Grid
                    style={{ paddingTop: "250px" }}
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="flex-end"
                    spacing={2}>

                    <Grid item xs={12}>
                        <div style={{ paddingLeft: 'calc(24px + 9vw)', paddingBottom: "40px" }}>
                            <label style={{ fontSize: '4vmin' }} className="font-montserrat-bold color-white letter-spacing-m">
                                Search
                                <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "40px", paddingLeft: "20px" }}>.</span>
                            </label>
                        </div>
                    </Grid>
                    <Grid item style={{ paddingLeft: 'calc(24px + 10vw)' }} xs={10}>
                        <StyledTextField
                            variant="standard"
                            color='primary'
                            inputProps={{ style: { color: "white" } }}
                            fullWidth
                            value={wordEntered}
                            onChange={handleFilter} 
                            // onChange={(e) => {
                            //     setSearchParams(
                            //         createSearchParams({ words: e.target.value })
                            //     )
                            // }}
                            autoComplete="off" />
                        <SearchIcon style={{ color: "white", position: "absolute" }} />
                    </Grid>

                </Grid>
            </div>

            {wordEntered.length ?
                <div className={classes.dataResult}>
                    {filteredData.length ? <div>
                        {filteredData.map((value, key) => {
                            return (
                                <div>
                                    <a href={value.link} className={classes.dataItemTitle}>{value.title}</a>
                                    <div className={classes.dataItem}>{value.des}</div>
                                </div>
                            );
                        })}
                    </div>
                        :
                        <div> No result</div>
                    }

                </div>
                :
                <div className={classes.dataResult}>
                    {data.map(value => (
                        <div>
                            <a href={value.link} className={classes.dataItemTitle}>{value.title}</a>
                            <div className={classes.dataItem}>{value.des}</div>
                        </div>
                    ))}
                </div>
            }

        </Box>
    )
}