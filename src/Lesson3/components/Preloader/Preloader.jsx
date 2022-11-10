import React from 'react';
import {Container, Grid} from "@mui/material";
import "./Preloader.module.css";

const Preloader = () => {
    return <Container>
        <Grid container
              style={{height: window.innerHeight - 50, alignItems: "center", justifyContent: "center"}}>
            <Grid style={{width: "400px", background: "lightgrey"}}
                  container
                  alignItems={"center"}
                  direction={"column"}>
            </Grid>
            <div className="lds-spinner"></div>
        </Grid>
    </Container>
};

export default Preloader;