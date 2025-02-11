// components/BlogHome.tsx
import React from "react";
import { motion } from "framer-motion";
import PostPreview from "@/components/PostPreview";
import { PostMetadata } from "@/components/getPostMetadata";

interface BlogHomeProps {
  posts: PostMetadata[];
}

export default function BlogHome({ posts }: BlogHomeProps) {
  return (
    <section id="Blogs">
      <div style={{marginTop: 50, marginLeft: 100, marginRight: 100 }} className="pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          Posts
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="content mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl grid grid-cols-1 flex flex-col space-y-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <PostPreview {...post} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
