import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {AuthFirebaseContext} from "../../pages/Lesson3Main";
import firebase from 'firebase/compat/app';
// import firebase from 'firebase';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const LoginLesson3 = () => {

    const {auth} = useContext(AuthFirebaseContext);

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
    };

    return (
        <Container>
            <Grid container
                  style={{height: window.innerHeight - 50, alignItems: "center", justifyContent: "center"}}>
                <Grid style={{width: "400px", background: "lightgrey"}}
                      container
                      alignItems={"center"}
                      direction={"column"}>
                    <Box p={5}>
                        <Button style={{color: "black", border: "1px solid black"}}
                                variant={"outlined"}
                                onClick={login}>
                            Login with google
                        </Button>
                    </Box>
                </Grid>

            </Grid>
        </Container>
    );
};

export default LoginLesson3;