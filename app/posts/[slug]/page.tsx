import fs from "fs";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";
import getPost from "@/components/getPostMetadata";

const getPostContent = (slug: string) => {
    const folder = "posts/";
    const file = `${folder}${slug}.md`;
    const content = fs.readFileSync(file, "utf8");
    const matterResult = matter(content);
    return matterResult;
};

export const generateStaticParams = async () => {
    const posts = getPost();
    return posts.map((post) => ({
        slug: post.slug,
    }));
};

const PostPage = (props: any) => {
    const slug = props.params.slug;
    const post = getPostContent(slug);
    return (
        <div className="content text-left p-4 mx-4 flex flex-row items-stretch justify-center align-top md:space-x-10 md:space-y-0" style={{marginTop: 100}}>
            <article className="prose lg:prose-x; prose-gray prose-a:text-blue-600 dark:prose-invert dark:prose-pre:bg-slate-700">
                <h1 className="grad">{post.data.title}</h1>
                <ReactMarkdown>{post.content}</ReactMarkdown>
            </article>
        </div>
    );
};

export default PostPage;