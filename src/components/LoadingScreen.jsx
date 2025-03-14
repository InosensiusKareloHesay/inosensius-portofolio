import { useEffect } from "react";
import { useState } from "react";

export const LoadingScreen = ({ onComplete }) => {
    const [text, setText] = useState("");
    const fullText = "< Hi, Welcome! />";

    useEffect(()=>{
        let index = 0;
        const interval = setInterval(() => {
            setText(fullText.substring(0, index))
            index++;

            if(index > fullText.length){
                clearInterval(interval)

                setTimeout(() => {
                    onComplete()
                }, 1000)
            }
        }, 150)

        return () => clearInterval(interval);
    }, [onComplete])

    return (
        <div className="fixed inset-0 z-50 bg-[#0f2242] text-[#c1d8f6] flex flex-col items-center justify-center">
            <div className="mb-4 text-4xl font-mono fontbold">
                {text} <span className="animate-blink ml-1"> | </span>
            </div>

            <div className="w-[200px] h-[2px] bg-[#8ab7ef] rounded relative overflow-hidden">
                <div className="w-[40%] h-full bg-[#087457] shadow-[0_0_15px_#094b3b] animate-loading-bar">
                    {" "}
                </div>
            </div>
        </div>
    );
};