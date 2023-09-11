import { json, LoaderArgs, redirect } from "@remix-run/node";
import { Link, Outlet, useLoaderData } from "@remix-run/react";

import { getPosts } from "~/models/post.server";
import { getUserId } from "~/session.server";

export const loader = async ({ request }: LoaderArgs) => {
  const userId = await getUserId(request);
  if (userId != "clmcht3zh00002zyyo26i07d8") return redirect("/login");
  return json({ posts: await getPosts() });
};

export default function PostAdmin() {
  const { posts } = useLoaderData<typeof loader>();
  return (
    <div className="grid grid-cols-6 gap-6">
      <>
        <link
          rel="stylesheet"
          href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css"
        />
        <div
          className="min-h-screen sm:flex sm:flex-row sm:w-30"
          style={{ backgroundColor: "#f0f0f0" }}
        >
          <div className="sm:flex sm:flex-col sm:w-56 overflow-hidden">
            <ul className="flex flex-col py-4">
              <li>
                <a
                  href="/posts/admin"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-home" />
                  </span>
                  <span className="text-sm font-medium">Home</span>
                </a>
              </li>
              <li>
                <a
                  href="/posts/admin/new"
                  className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                >
                  <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                    <i className="bx bx-bell" />
                  </span>
                  <span className="text-sm font-medium">Create New Blogs</span>
                </a>
              </li>
              {posts.map((post) => (
                <li key={post.slug}>
                  <a
                    
                    className="flex flex-row items-center h-12 transform hover:translate-x-2 transition-transform ease-in duration-200 text-gray-500 hover:text-gray-800"
                  >
                    <span className="inline-flex items-center justify-center h-12 w-12 text-lg text-gray-400">
                      <i className="bx bx-chat" />
                    </span>
                    <span className="text-sm font-medium">
                      <Link to={post.slug}>{post.title}</Link>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </>

      <main className="col-span-4">
        <Outlet />
      </main>
    </div>
  );
}
