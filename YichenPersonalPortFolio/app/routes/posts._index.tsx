import { json, LoaderArgs, redirect } from "@remix-run/node";
import { Link, useLoaderData } from "@remix-run/react";
import { getPostListings, getPosts } from "~/models/post.server";
import type { LoaderFunction } from "@remix-run/node";
import { Blogcard } from "~/components/BlogCard";
import { getUserId } from "~/session.server";
type LoaderData = {
  posts: Awaited<ReturnType<typeof getPostListings>>;
  isLoggedin: boolean;
};
export const loader: LoaderFunction = async ({ request }: LoaderArgs) => {
  //only runs on server
  const userId = await getUserId(request);
  return json<LoaderData>({
    posts: await getPostListings(),
    isLoggedin: userId == "clmcht3zh00002zyyo26i07d8" ? true : false,
  });
};



export default function Posts() {
  const { posts, isLoggedin } = useLoaderData<typeof loader>() as LoaderData;
  return (
    <main style={{ minHeight: "80vh" }}>
      <div className="h-screen flex items-center py-10">
        <section
          className="w-full bg-cover bg-center py-32"
          style={{
            backgroundImage: 'url("https://source.unsplash.com/random")',
          }}
        >
          <div className="container mx-auto text-center text-white">
            <h1 className="text-3xl sm:text-5xl font-medium mb-4 sm:mb-6">
              Welcome to My Technical Blogs
            </h1>
            <p className="text-lg sm:text-xl mb-6 sm:mb-12">
              I use this blog to record what I've learned each day
            </p>
          </div>
        </section>
      </div>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-4 mb-12">
        <article>
          <section className="mt-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-6 gap-y-8">
            {posts.map((post) => (
              <li key={post.slug} style={{ listStyle: "none" }}>
                <Link to={post.slug} prefetch="intent">
                  <Blogcard title={post.title} />
                </Link>
              </li>
            ))}

            {/*<Blogcard title='111' />*/}
          </section>
        </article>
      </section>

      {/* component */}
      <div
        className={`flex justify-center items-center ${
          isLoggedin ? "" : "hidden"
        }`}
      >
        <button className="group relative h-12 w-48 overflow-hidden rounded-lg bg-white text-lg shadow">
          <div className="absolute inset-0 w-3 bg-amber-400 transition-all duration-[250ms] ease-out group-hover:w-full" />
          <span className="relative text-black group-hover:text-white">
            <Link to="admin">Update Blog</Link>
          </span>
        </button>
      </div>
      <br />
    </main>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

