"use client";

import React from "react";

const Headings = ({ headings, activeId }) => (
  <ul>
    {headings.map((heading) => (
      <li key={heading.id} className={heading.id === activeId ? "active" : ""}>
        <a href={`#${heading.id}`}>{heading.title.slice(1)}</a>
        {heading.items.length > 0 && (
          <ul>
            {heading.items.map((child) => (
              <li
                key={child.id}
                className={child.id === activeId ? "active" : ""}
              >
                <a href={`#${child.id}`}>{child.title}</a>
              </li>
            ))}
          </ul>
        )}
      </li>
    ))}
  </ul>
);

const useHeadingsData = () => {
  const [nestedHeadings, setNestedHeadings] = React.useState([]);

  React.useEffect(() => {
    const headingElements = Array.from(
      document.querySelectorAll(".content h2")
    );
    // eslint-disable-next-line no-use-before-define
    const newNestedHeadings = getNestedHeadings(headingElements);
    setNestedHeadings(newNestedHeadings);
  }, []);

  return { nestedHeadings };
};

const getNestedHeadings = (headingElements) => {
  const nestedHeadings = [];

  headingElements.forEach((heading) => {
    const { innerText: title, id } = heading;
    if (heading.nodeName === "H2") {
      nestedHeadings.push({ id, title, items: [] });
    }
  });

  return nestedHeadings;
};
const useIntersectionObserver = (setActiveId) => {
  React.useEffect(() => {
    const headingElements = Array.from(document.querySelectorAll("h2"));
    const headingElementsRef = {};

    headingElements.forEach((el) => {
      headingElementsRef[el.id] = el;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleHeadings = entries
          .filter((entry) => entry.isIntersecting)
          .map((entry) => entry.target);

        if (visibleHeadings.length === 0) return;

        const sorted = visibleHeadings.sort(
          (a, b) =>
            headingElements.findIndex((el) => el.id === a.id) -
            headingElements.findIndex((el) => el.id === b.id)
        );

        setActiveId(sorted[0].id);
      },
      {
        root: null,
        rootMargin: "0px 0px -70% 0px",
        threshold: 0.1,
      }
    );

    headingElements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, [setActiveId]);
};
export const TableOfContents = () => {
  const [activeId, setActiveId] = React.useState(null);
  const { nestedHeadings } = useHeadingsData();
  useIntersectionObserver(setActiveId);

  return (
    <nav aria-label="Table of contents" className="fade-in-left">
      <a className="no-a" href="#">
        On this page
      </a>
      <Headings headings={nestedHeadings} activeId={activeId} />
      <div className="table-actions">
        <div>
          <span>
            <i className="ri-github-fill"></i>
          </span>
          <a
            className="no-a"
            href="https://github.com/zely-js/zely"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            Feedback on Github
          </a>
        </div>
      </div>
    </nav>
  );
};
