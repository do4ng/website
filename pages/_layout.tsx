"use client";

/* eslint-disable import/no-cycle */

import { usePathname } from "$exta-router";
import { Link } from "exta/components";

import "../styles/global.scss";
import "../styles/style.scss";
import ScrollTop from "@/lib/scrolltotop";

import config from "@/config";
import { capitalizeFirstLetter } from "@/lib/up";
import { Header } from "../components/header";
import { CategoryMenu } from "../components/category";

import React from "react";

export function toggleTheme(to: "dark" | "white" = "dark") {
  if (typeof window === "undefined") return;
  document.querySelector("html").setAttribute("class", to);
}

export default function Layout({ children }: { children: React.ReactNode }) {
  /*
  if (typeof window !== 'undefined') {
    if (
      window.location.origin.startsWith('http') &&
      window.location.origin.startsWith('https://zely2.netlify.app')
    ) {
      window.location.href = window.location.href.replace(
        'https://zely2.netlify.app',
        'https://zely.vercel.app',
      );
    }
  }
  */

  const path = usePathname().split("/")[1];

  const isDocs =
    path === "docs" ||
    path === "serpack" ||
    path === "apis" ||
    path === "plugins";

  if (typeof window !== "undefined") {
    toggleTheme((localStorage.getItem("theme") as any) || "dark");
  }

  const target = config.find(
    (category) => category.title.toLowerCase() === path
  );

  return (
    <>
      <Header></Header>

      {isDocs ? (
        <>
          <div className="documentation">
            <div className="menu">
              <div className="menu-layout">
                <div className="menu-categories">
                  {config
                    .filter(({ title }) => title.toLowerCase() !== "changelog")
                    .map((c) => (
                      <div
                        key={c.title}
                        className={`category-button ${
                          path.toLocaleLowerCase() ===
                          c.title.toLocaleLowerCase()
                            ? "category-active"
                            : ""
                        }`}
                      >
                        <Link
                          href={`/${c.title.toLocaleLowerCase()}/${c.target}`}
                        >
                          <div className="category-button-icon">
                            <i className={`ri-${c.icon}`}></i>
                          </div>
                          <div className="category-button-text">
                            <h4>{capitalizeFirstLetter(c.title)}</h4>
                          </div>
                        </Link>
                      </div>
                    ))}
                </div>
                <div className="menu-content">
                  {target ? (
                    target.category.map((category) => (
                      <>
                        <CategoryMenu
                          hidden={category.hidden || false}
                          category={category as any}
                          key={category}
                        ></CategoryMenu>
                      </>
                    ))
                  ) : (
                    <>page not found</>
                  )}
                </div>
              </div>
            </div>
            <div className="content">{children}</div>
          </div>
        </>
      ) : (
        children
      )}
    </>
  );
}
