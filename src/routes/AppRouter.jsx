import React, {useContext} from "react";
import {Route, Routes} from "react-router-dom";
import {privateRoutes, publicRoutes} from "./routes";
import {AuthContext} from "../Lesson1/context";
import Preloader from "../Lesson1/components/UI/Preloader/Preloader";


const AppRouter = () => {

    const {isAuth, isLoadingApp} = useContext(AuthContext);

    if (isLoadingApp) {return <Preloader/>}

    return <div>
        {isAuth
            ? <Routes>
                {privateRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)}
            </Routes>

            : <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={route.element}/>)}
            </Routes>
        }
    </div>
};

export default AppRouter;

