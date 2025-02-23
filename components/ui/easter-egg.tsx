"use client";
import { useDevToolsOpen } from "@/hooks/use-devtools-open";
import React, { useEffect } from "react";
import NyanCat from "./nyan-cat";

const EasterEggs = () => {
  const { isDevToolsOpen } = useDevToolsOpen();

  useEffect(() => {
    if (!isDevToolsOpen) return;

    if (typeof console !== "undefined") {
      console.clear();
      console.log(
        "%cWhoa, look at you! 🕵️‍♂️\n" +
          "You seem to have discovered the secret console! 🔍\n" +
          "Want to see some magic? ✨\n" +
          "Just type %cConatusBharat%c and hit enter! 🎩🐇",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #00FF00; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:20px",
        "color: #FFD700; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
      );

      ["ConatusBharat", "conatusbharat", "CONATUSBHARAT"].forEach((name) => {
        if (Object.hasOwn(window, name)) return;
        Object.defineProperty(window, name, {
          get() {
            console.log(
              "%c✨ Welcome to Conatus Bharat! ✨\n\n" +
                "You've unlocked the gateway to future-ready education! 🚀📚\n" +
                "Empowering students, one step at a time! 🌍💡",
              "color: #FF4500; font-size: 18px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px; margin-top:10px"
            );

            const timer = setTimeout(() => {
              console.log(
                "%cPssttt! 🤫\n\n" +
                  "Want to revolutionize learning? 🚀 Stay curious and press c",
                "color: #FF69B4; font-size: 16px; font-weight: bold; background-color: black; padding: 10px; border-radius: 10px;"
              );
              clearTimeout(timer);
            }, 7000);
            return "";
          },
        });
      });
    }
  }, [isDevToolsOpen]);

  return <NyanCat />;
};

export default EasterEggs;