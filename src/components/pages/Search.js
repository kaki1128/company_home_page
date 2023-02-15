import React, { useState, useEffect } from "react";
import { makeStyles } from '@mui/styles';
import { Box, Container, Grid, TextField, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import { createSearchParams, Link, useNavigate, useSearchParams, useLocation } from 'react-router-dom';
import ScrollToTop from "../../ScrollToTop";

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
        "margin": "200px 0 100px 0",
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
    const { state: { words } } = useLocation()

    useEffect(() => {
        setWordEntered(words)
        const newFilter = data.filter((value) => {
            return value.keywords.toLowerCase().includes(words.toLowerCase());
        });

        if (words === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    }, [])


    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.keywords.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    return (
        <ScrollToTop>
            <div style={{ height: '500px', backgroundColor: '#12043F' }} />
            <Box>
                <Container maxWidth="lg">
                    <Box px={{ xs: 2, sm: 3, md: 4, lg: 0 }}>
                        <div style={{ marginTop: "-250px" }}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="flex-end"
                                spacing={2}>

                                <Grid item xs={12}>
                                    <div style={{ paddingBottom: "40px" }}>
                                        <label style={{ fontSize: '2.8rem' }} className="font-montserrat-bold color-white letter-spacing-m">
                                            Search
                                            <span style={{ color: "#F1A039", fontWeight: "900", fontSize: "40px", paddingLeft: "20px" }}>.</span>
                                        </label>
                                    </div>
                                </Grid>
                                <Grid item xs={11}>
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
                        </div>
                    </Box>
                </Container>
            </Box>
        </ScrollToTop>
    )
}