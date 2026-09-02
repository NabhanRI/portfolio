"use client";

import { useEffect, useState } from "react";

type TypewriterTextProps = {
    text: string;
    className?: string;
    speedMs?: number;
    startDelayMs?: number;
};

export function TypewriterText({
    text,
    className,
    speedMs = 55,
    startDelayMs = 300,
}: TypewriterTextProps) {
    const [shown, setShown] = useState("");

    useEffect(() => {
        let i = 0;
        let intervalId: ReturnType<typeof setInterval> | undefined;

        const timeoutId = setTimeout(() => {
            intervalId = setInterval(() => {
                i += 1;
                setShown(text.slice(0, i));
                if (i >= text.length) {
                    clearInterval(intervalId);
                }
            }, speedMs);
        }, startDelayMs);

        return () => {
            clearTimeout(timeoutId);
            if (intervalId) clearInterval(intervalId);
        };
    }, [text, speedMs, startDelayMs]);

    return (
        <span className={className}>
            {shown.split("\n").map((line, index, arr) => (
                <span key={`${line}-${index}`}>
                    {line}
                    {index < arr.length - 1 ? <br /> : null}
                </span>
            ))}
            <span
                className="ml-0.5 inline-block w-[0.15ch] bg-teal-700 dark:bg-amber-400 animate-caret"
                style={{ height: "0.8em", marginLeft: "0.15em" }}
                aria-hidden
            />
        </span>
    );
}