import React from 'react';
import {AppBar, Button, Grid, Toolbar} from "@mui/material";
import {NavLink} from "react-router-dom";
import {useContext} from "react";
import {AuthFirebaseContext} from "../../pages/Lesson3Router";
import {useAuthState} from "react-firebase-hooks/auth";



const NavbarLesson3 = () => {

    const {auth} = useContext(AuthFirebaseContext);
    const [user] = useAuthState(auth)

    const logout =  async () => {
        return await auth.signOut()
    }

    return (
        <AppBar color={"secondary"} position="static">
            <Toolbar variant={"dense"}>
                <Grid container justifyContent={"flex-end"}>
                    {user
                        ? <Button onClick={logout} style={{color: "black",border: "1px solid black"}} variant={"outlined"}>Logout</Button>
                        : <NavLink to={"loginLesson3"}>
                            <Button style={{color: "black",border: "1px solid black"}} variant={"outlined"}>Login</Button>
                        </NavLink>
                    }

                </Grid>
            </Toolbar>

        </AppBar>
        // <div className={classes.navbar}>
        //     <ul className={classes.navbar_list}>
        //
        //         <li className={classes.navbar__li}>
        //             <strong>
        //                 <a className={classes.navbar__link && classes.youtube__link}
        //                    href="https://youtu.be/12kgyxvsxUs">Youtube lesson link</a>
        //             </strong>
        //         </li>
        //
        //         <li className={classes.navbar__li}>
        //             <NavLink
        //                 className={SelectedLink => SelectedLink.isActive ? classes.active__link : classes.navbar__link}
        //                 to={"chatLesson3"}>
        //                 Chat
        //             </NavLink>
        //         </li>
        //
        //         <li className={classes.navbar__li}>
        //             <NavLink
        //                 className={SelectedLink => SelectedLink.isActive ? classes.active__link : classes.navbar__link}
        //                 to={"loginLesson3"}>
        //                 Login
        //             </NavLink>
        //         </li>
        //
        //     </ul>
        // </div>
    );
};

export default NavbarLesson3;