"use client"

import React from "react";
import { useInView } from "react-intersection-observer";

export const Counter = ({ number }: {number: number}) => {
    const [count, setCount] = React.useState(0);
    const [ref, isInView] = useInView();

    React.useEffect(() => {
        let start = 0;
        if (isInView) {
            const end = number;
            if (start === end) return;

            const duration = 2000;
            const increment = end / (duration / 16);

            const timer = setInterval(() => {
                start += increment;
                if (start > end) {
                    setCount(end);
                    clearInterval(timer);
                    return;
                }
                setCount(Math.floor(start));
            }, 16);

            return () => clearInterval(timer);
        }
    }, [number, isInView]);

    return <span ref={ref}>{count.toLocaleString()}+</span>;
};
