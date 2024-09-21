import Link from "next/link";
import { PostMetadata } from "./PostMetadata";

const PostPreview = (props: PostMetadata) => {
    return (
        <Link href={`/posts/${props.slug}`}>
            <div className="bg-gray-100 dark:bg-gray-500 p-8 rounded-md shadow-md hover:opacity-70" >
                <div className="text-black dark:text-white">
                    <p className="text-gray-600 dark:text-gray-300">{props.date}</p>
                    <h2 className="text-2xl font-bold">{props.title}</h2>
                    <p>{props.subtitle}</p>
                </div>
            </div>
        </Link>
    );
}

export default PostPreview;