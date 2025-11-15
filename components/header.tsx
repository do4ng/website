"use client";

/* eslint-disable import/no-cycle */

import "remixicon/fonts/remixicon.css";

import { Image, Link } from "exta/components";
import { Popover } from "@/components/popper";
import docs from "@/docs.config";
import { TextLabel } from "@/components/label";
import { ThemeSelector } from "@/components/theme-selector";
import { useEffect, useState } from "react";
import { usePathname } from "$exta-router";

export function Header() {
  const pathname = usePathname().split("/");
  const path = pathname[1];

  const [isScrolled, setScrolled] = useState(false);

  const [defaultValue, setDefaultValue] = useState("dark");
  const [hideAlert, setAlert] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const theme = (localStorage.getItem("theme") as any) || "dark";
      setDefaultValue(theme);

      console.log(`[app] theme selected: ${theme}`);
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const target = document.querySelector("html");

    target.style = `color-scheme: ${
      defaultValue === "dark" ? "dark" : "light"
    };`;
  }, [defaultValue]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    let target = document.body;

    if (path === "blog" && pathname.length > 2) {
      target = document?.getElementsByClassName("blog").item(0) as any;
    }

    target?.addEventListener("scroll", () => {
      const { scrollTop } = target;

      if (scrollTop > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    });
  }, [pathname, path]);

  return (
    <>
      <header
        className={`header-container text ${
          path.trim() !== "" &&
          path.trim() !== "blog" &&
          path.trim() !== "changelog"
            ? ""
            : "transparent-header"
        } ${isScrolled ? "scrolled" : ""}`}
      >
        <div
          className="deprecated text-inter"
          style={{ display: hideAlert ? "none" : "block" }}
        >
          <div className="deprecated-inner">
            <span>
              This project has been deprecated. -{" "}
              <Link href="/blog/25-10-30">Read Blog</Link>
            </span>
            <button
              onClick={() => {
                setAlert(true);
              }}
            >
              x
            </button>
          </div>
        </div>
        <div className="header">
          <Link className="item-1 logo" href="/">
            {docs.name} <span className="docs-icon">docs</span>
          </Link>

          <div className="item-2">
            {docs.header.map((item) => {
              if (item.type === "popover") {
                return (
                  <>
                    <Popover text={item.title} key={item.title}>
                      {item.children.map((child) => (
                        <>
                          <div className="menu-item text-inter">
                            <Link href={child.href} className="menu-container">
                              <div className="menu-icon">
                                <i className={child.icon}></i>
                              </div>
                              <div className="menu-content">
                                <h4>{child.title}</h4>
                                {child.description}
                              </div>
                            </Link>
                          </div>
                        </>
                      ))}
                    </Popover>
                  </>
                );
              }
              return (
                <Link href={item.href} className="btn focuser" key={item.title}>
                  {item.title}
                </Link>
              );
            })}
          </div>

          <div className="item-3">
            <TextLabel text="What's new?">
              <Link href="/changelog">
                <p>
                  <i className="ri-receipt-line"></i>
                </p>
              </Link>
            </TextLabel>
            <ThemeSelector
              defaultValue={defaultValue}
              setDefaultValue={setDefaultValue}
            ></ThemeSelector>
            <TextLabel text="github">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/zely-js/zely"
                className="big-icon"
              >
                <i className="ri-github-fill"></i>
              </a>
            </TextLabel>
          </div>
        </div>
      </header>
    </>
  );
}
