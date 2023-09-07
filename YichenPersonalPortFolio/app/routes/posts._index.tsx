import { json } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPostListings, getPosts } from "~/models/post.server";
import type { LoaderFunction } from "@remix-run/node";
import { Blogcard } from "~/components/BlogCard";
type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
};
export const loader: LoaderFunction = async () => {
  //only runs on server
  return json<LoaderData>({ posts: await getPostListings() });
};

export default function Posts() {
  const { posts } = useLoaderData<typeof loader>() as LoaderData;
  return (
    <main>
      <h2 className="text-2xl font-extrabold text-gray-900">BLOG</h2>
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            <Blogcard />
            <Blogcard />
            <Blogcard />
            <Blogcard />
          </section>
        </article>
      </section>
      <h1>Posts</h1>
      <Link to="admin" className="text-red-600 underline">
        Admin
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to={post.slug}
              prefetch="intent"
              className="text-blue-600 underline"
            >
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
