// components/getPostMetadata.ts
import fs from "fs";
import matter from "gray-matter";

// Each post has these frontmatter fields
export interface PostMetadata {
  title: string;
  date: string;
  slug: string;
  subtitle: string;
}

export default function getPostMetadata(): PostMetadata[] {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPosts = files.filter((file) => file.endsWith(".md"));

  // Extract frontmatter from each file
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResult = matter(fileContents);

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      subtitle: matterResult.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  // Sort by date descending (optional)
  return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}
