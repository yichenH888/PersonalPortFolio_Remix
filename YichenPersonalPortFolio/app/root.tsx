import { cssBundleHref } from "@remix-run/css-bundle";
import type { LinksFunction, LoaderArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";

import { getUser, getUserId } from "~/session.server";
import stylesheet from "~/tailwind.css";
import { AppHeader } from "./components/AppHeader";
import { AppFooter } from "./components/AppFooter";

type LoaderData = {
  isLoggedin: boolean;
};
export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
  ...(cssBundleHref ? [{ rel: "stylesheet", href: cssBundleHref }] : []),
];

export const loader = async ({ request }: LoaderArgs) => {
    const userId = await getUserId(request);
    console.log(userId);
  return json<LoaderData>({
    isLoggedin: userId ? true : false,
  });
};

export default function App() {
  const { isLoggedin } = useLoaderData<typeof loader>() as LoaderData;
  return (
    <html lang="en" className="h-full" style={{ backgroundColor: "#f5f5f5" }}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body className="h-full">
        <AppHeader isLoggedin={isLoggedin}/>
        <Outlet />
        <AppFooter />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
