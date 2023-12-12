import * as fs from "node:fs";
import * as path from "node:path";

import { compileMDX } from "next-mdx-remote/rsc";
import { Newsletter } from "@/app/components/Newsletter";

import rehypePrettyCode from "rehype-pretty-code";
const prettyCodeOptions = {
  theme: "one-dark-pro",
  onVsitLine(node) {
    if (node.children.lenght === 0) {
      node.children = [{ type: "text", value: " " }];
    }
  },
  onVisitHighlightedLine(node) {
    node.properties.className.push("highlighted");
  },
};

const rootDirectory = path.join(process.cwd(), "content");

const components = {
  h1: (props) => (
    <h1 {...props} className="text-gray-500">
      {props.children}
    </h1>
  ),
  Newsletter: Newsletter,
};

export async function getPostBySlug(slug) {
  const realSlug = slug.replace(/\.mdx$/, "");
  // example name.mdx => name

  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { content, frontmatter } = await compileMDX({
    source: fileContent,
    components,
    options: {
      parseFrontmatter: true,
      mdxOptions: {
        rehypePlugins: [[rehypePrettyCode, prettyCodeOptions]],
      },
    },
  });

  return { content, frontmatter };
}
