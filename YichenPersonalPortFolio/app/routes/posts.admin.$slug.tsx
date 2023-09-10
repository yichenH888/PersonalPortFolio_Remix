import type { ActionArgs, LoaderArgs } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Form, useLoaderData } from "@remix-run/react";
import { marked } from "marked";
import invariant from "tiny-invariant";
import { deletePost } from "~/models/post.server";

import { getPost } from "~/models/post.server";

type LoaderData = {
  html: string;
  title: string;
};
export const loader = async ({ params }: LoaderArgs) => {
  invariant(params.slug, "params.slug is required");

  const post = await getPost(params.slug);
  invariant(post, `Post not found: ${params.slug}`);

  const html = marked(post.markdown);
  return json<LoaderData>({ html, title: post.title });
};
export const action = async ({ params }: ActionArgs) => {
  invariant(params.slug, "params.slug is required");
  const deletion = await deletePost(params.slug);
  invariant(deletion, `Post not found: ${params.slug}`);

  return redirect("/posts/admin");
};
export default function PostSlug() {
  const { html, title } = useLoaderData<typeof loader>();
  return (
    <main className="mx-auto max-w-4xl">
      <h1 className="my-6 border-b-2 text-center text-3xl">{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: html }} />
      <hr className="my-4" />
      <Form method="post">
        <button
          type="submit"
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400"
        >
          Delete
        </button>
      </Form>
    </main>
  );
}
