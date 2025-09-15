import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { exta } from "exta";
import { writeFileSync, readFileSync, existsSync } from "fs";
import path from "path";

import config from "./config";

export default defineConfig({
  plugins: [
    react(),
    exta(),
    {
      name: "sitemap-and-learning-files",
      apply: "build",
      closeBundle() {
        const baseUrl = "https://zely.vercel.app";
        const sitemap: string[] = [];
        const learningFiles: string[] = [];

        sitemap.push('<?xml version="1.0" encoding="UTF-8"?>');
        sitemap.push(
          '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">'
        );

        for (const conf of config) {
          const { title, category } = conf;

          for (const cat of category) {
            for (const post of cat.posts) {
              const [slug] = Object.keys(post);

              // URL
              const url = `${baseUrl}/${title}/${slug}`;
              sitemap.push(`  <url>`);
              sitemap.push(`    <loc>${url}</loc>`);
              sitemap.push(`  </url>`);

              const docsPath = path.resolve(
                `./${title}/${cat.name}/${slug}.mdx`.toLowerCase()
              );
              console.log(docsPath);
              if (existsSync(docsPath)) {
                const content = readFileSync(docsPath, "utf-8");
                learningFiles.push(
                  `# URL: /${title}/${slug}\n# FILE: ${docsPath}\n\n${content}\n\n---\n`
                );
              } else {
                learningFiles.push(
                  `# URL: /${title}/${slug}\n# FILE: ${docsPath}\n\n[파일 없음]\n\n---\n`
                );
              }
            }
          }
        }

        sitemap.push("</urlset>");

        writeFileSync(
          path.resolve("./dist/sitemap.xml"),
          sitemap.join("\n"),
          "utf-8"
        );

        writeFileSync(
          path.resolve("./dist/llm.txt"),
          learningFiles.join("\n"),
          "utf-8"
        );
      },
    },
  ],
});
