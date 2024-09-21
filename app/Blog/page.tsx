import React from "react"
import Link from "next/link";
import getPost from "@/components/getPostMetadata";
import PostPreview from "@/components/PostPreview";

const BlogHome = () => {
  const postMetadata = getPost();
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ));
    return (
        <section id="Blogs">
          <h1 style={{marginTop: 100}} className="my-10 text-center font-bold text-4xl">
            Posts
            <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
          </h1>
          <div className="content mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl grid grid-cols-1 flex flex-col space-y-8">
            {postPreviews}
          </div>
        </section>
      )
};

export default BlogHome;
  