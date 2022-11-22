import React, {useContext} from 'react';
import classes from "./Lesson3.module.css";
import {Route, Routes} from "react-router-dom";
import NavbarLesson3 from "../Navbar/NavbarLesson3";
import {privateRoutes, publicRoutes} from "../../routesLesson3";
import {AuthFirebaseContext} from "../../pages/Lesson3Router";
import {useAuthState} from "react-firebase-hooks/auth";
import Preloader from "../Preloader/Preloader";


const Lesson3 = () => {

    const {auth} = useContext(AuthFirebaseContext);
    const [user, loading, error] = useAuthState(auth)
    if (loading) {
        return <Preloader/>
    }

    return user ?
        (
            <div className={classes.lesson3}>
                <NavbarLesson3/>
                <div className={classes.lesson3__content}>


                    <Routes>
                        {privateRoutes.map(route =>
                            <Route key={route.path} path={route.path} element={route.element}/>)}
                    </Routes>
                </div>
            </div>
        )
        :
        (
            <div className={classes.lesson3}>
                <NavbarLesson3/>
                <div className={classes.lesson3__content}>
                    <Routes>
                        {publicRoutes.map(route =>
                            <Route key={route.path} path={route.path} element={route.element}/>)}
                    </Routes>
                </div>
            </div>
        )
};

export default Lesson3;