import React, {useRef} from 'react';
import {useHover} from "../../../hooks/Lesson2/useHover";

const Hover = () => {

    const ref = useRef();

    const isHovering = useHover(ref);

    return (
        <div>
            <div ref={ref} style={{width: "300px", height: "300px", background: isHovering ? "red" : "orange"}}>
            </div>
            <button onClick={() => console.log(ref.current)}>Click</button>
        </div>
    )
};

export default Hover;