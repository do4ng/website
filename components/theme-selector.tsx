"use client";

/* eslint-disable import/no-cycle */
import { toggleTheme } from "@/pages/_layout";
import { useEffect, useState } from "react";
import { TextLabel } from "./label";

export function ThemeSelector({ defaultValue, setDefaultValue }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = (localStorage.getItem("theme") as any) || "dark";
      setDefaultValue(theme);

      console.log(`[app] theme selected: ${theme}`);
    }
  }, []);

  return (
    <>
      <TextLabel text="Toggle Theme">
        <button
          onClick={() => {
            if (defaultValue === "dark") {
              toggleTheme("white");
              localStorage.setItem("theme", "white");
              setDefaultValue("white");
            } else {
              toggleTheme("dark");
              localStorage.setItem("theme", "dark");
              setDefaultValue("dark");
            }
          }}
        >
          {defaultValue === "dark" ? (
            <>
              <i className="ri-moon-line"></i>
            </>
          ) : (
            <>
              <i className="ri-sun-line"></i>
            </>
          )}
        </button>
      </TextLabel>
    </>
  );
}
