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
    <main>
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

      <Link
        to="admin"
        className={`text-red-600 underline ${isLoggedin ? "" : "hidden"}`}
      >
        Admin
      </Link>
    </main>
  );
}
function useState(arg0: boolean): [any, any] {
  throw new Error("Function not implemented.");
}

