import React from 'react';
import classes from "./MyInputText.module.css"

const MyInputText = ({children,...props}) => {
    return (
        <div>
            <input
                className={classes.myInput}
                {...props} type="text"/>

        </div>
    );
};

export default MyInputText;