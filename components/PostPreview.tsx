import React from "react";
import Link from "next/link";
import { PostMetadata } from "./getPostMetadata";

export default function PostPreview({ title, subtitle, date, slug }: PostMetadata) {
  return (
    <div className="border border-slate-300 p-4 rounded-md shadow-sm mb-4 bg-white dark:bg-gray-800">
      <p className="text-xs text-slate-400">{date}</p>
      {/* clicking goes to blog */}
      <Link href={`/blog/${slug}`}>
        <h2 className="text-xl text-black font-bold hover:underline cursor-pointer">
          {title}
        </h2>
      </Link>
      <p className="text-slate-700 dark:text-slate-300">
        {subtitle}
      </p>
    </div>
  );
}
