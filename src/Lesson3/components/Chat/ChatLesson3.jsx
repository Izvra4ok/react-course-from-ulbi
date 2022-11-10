import React, {useContext, useState} from 'react';
import {AuthFirebaseContext} from "../../pages/Lesson3Main";
import {useAuthState} from "react-firebase-hooks/auth";
import {Avatar, Button, Container, Grid, TextField} from "@mui/material";
import {useCollectionData} from "react-firebase-hooks/firestore";
import Preloader from "../Preloader/Preloader";
import {Timestamp,} from "firebase/firestore";


const ChatLesson3 = () => {

    const {auth, firestore} = useContext(AuthFirebaseContext);
    const [user] = useAuthState(auth);
    const [value, setValue] = useState("");
    const [messages, loading] = useCollectionData(
        firestore.collection("messages").orderBy("createdAt")
    );

    const sendMessage = async () => {
        firestore.collection("messages").add({
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            text: value,
            createdAt: Timestamp.fromDate(new Date()),
        })
        setValue("");
    }

    if (loading) {
        return <Preloader/>
    }

    return (
        <Container>
            <Grid container
                  style={{
                      height: window.innerHeight - 50,
                      alignItems: "center",
                      justifyContent: "center",
                      marginTop: "5px"
                  }}>
                <div style={{width: "80%", height: "70vh", border: "1px solid black", overflowY: "auto"}}>
                    {messages.map(message =>
                        <div key={message.createdAt} style={{margin:"10px",
                            border: user.uid === message.uid ? "1px solid green" : "1px solid blue",
                        marginLeft: user.uid === message.uid ? "auto" : "20px",
                        width:"fit-content",padding:5,maxWidth:"49%",wordWrap:"break-word"}}>

                            <Grid container style={{margin:"10px",display:"flex",alignItems:"center"}}>
                                <Avatar src={message.photoURL}/>
                                <div style={{fontWeight:700}}>{message.displayName}</div>
                            </Grid>

                            <hr style={{  border: user.uid === message.uid ? "1px solid green" : "1px solid blue"}}/>

                            <div style={{margin:"0 10px 0 10px"}}>{message.text}</div>
                        </div>
                    )}
                </div>
                <Grid container direction={"column"} alignItems={"flex-end"} style={{width: "80%"}}>
                    <TextField value={value}
                               onChange={(e) => setValue(e.target.value)}
                               fullWidth maxRows={2}
                               style={{border: "1px solid black"}}
                               variant={"outlined"}/>
                    <Button onClick={sendMessage}
                            variant={"outlined"}
                            style={{color: "black", border: "1px solid black"}}>SEND</Button>
                </Grid>
            </Grid>

        </Container>
    );
};

export default ChatLesson3;