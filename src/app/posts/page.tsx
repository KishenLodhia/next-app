import PostLists from "@/components/post-list";
import React, { Suspense } from "react";

export default async function Page() {
  return (
    <main className="text-center pt-16 py-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <Suspense fallback="Loading...">
        <PostLists />
      </Suspense>
    </main>
  );
}