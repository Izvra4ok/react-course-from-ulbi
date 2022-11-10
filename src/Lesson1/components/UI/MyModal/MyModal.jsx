import React from 'react';
import classes from "./MyModal.module.css";

const MyModal = ({children, visible, setVisible}) => {

    const rootClassses = [classes.myModal];

    if (visible) {
        rootClassses.push(classes.active)
    }

    return (
        <div className={rootClassses.join(" ")}
             onClick={() => setVisible(false)}>

            <div className={classes.myModalContent}
                 onClick={(event => event.stopPropagation())}>
                {children}
            </div>

        </div>
    );
};

export default MyModal;