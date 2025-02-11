// pages/blog/[slug].tsx
import fs from "fs";
import matter from "gray-matter";
import { GetStaticProps, GetStaticPaths } from "next";
import ReactMarkdown from "react-markdown";
import path from "path";
import { PostMetadata } from "@/components/getPostMetadata";

interface PostPageProps {
  frontmatter: PostMetadata;
  content: string;
}

export default function PostPage({ frontmatter, content }: PostPageProps) {
  const { title, date } = frontmatter;

  return (
    <div className="content text-left p-4 mx-4 flex flex-row items-stretch justify-center align-top md:space-x-10 md:space-y-0" style={{ marginTop: 100 }}>
      <article className="prose lg:prose-xl prose-gray prose-a:text-blue-600 dark:prose-invert dark:prose-pre:bg-slate-700">
        <h1 className="mb-2">{title}</h1>
        <p className="text-sm text-gray-500">{date}</p>
        <ReactMarkdown>{content}</ReactMarkdown>
      </article>
    </div>
  );
}

// This runs at build time to generate all possible slugs
export const getStaticPaths: GetStaticPaths = () => {
  const folder = path.join(process.cwd(), "posts");
  const files = fs.readdirSync(folder);
  const paths = files.map((file) => ({
    params: {
      slug: file.replace(".md", ""),
    },
  }));

  return {
    paths,
    fallback: false, // 404 if slug not found
  };
};

// For each slug, read the file content and pass it as props
export const getStaticProps: GetStaticProps = ({ params }) => {
  const slug = params?.slug;
  const filePath = `posts/${slug}.md`;
  const fileContents = fs.readFileSync(filePath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    props: {
      frontmatter: { ...data, slug },
      content,
    },
  };
};
