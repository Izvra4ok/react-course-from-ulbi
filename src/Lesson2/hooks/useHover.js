import {useEffect, useState} from "react";

export const useHover = (ref) => {
    const [isHovering, setIsHovering] = useState(false)

    const onHovering = () => setIsHovering(true);
    const offHovering = () => setIsHovering(false);


    useEffect(() => {
        if (!ref.current) {
            return
        }
        const node = ref.current;

        node.addEventListener("mouseenter", onHovering)
        node.addEventListener("mousemove", onHovering)
        node.addEventListener("mouseleave", offHovering)

        return function () {
            node.removeEventListener("mouseenter", onHovering)
            node.removeEventListener("mousemove", onHovering)
            node.removeEventListener("mouseleave", offHovering)
        };
    }, [])

    return isHovering;
};

