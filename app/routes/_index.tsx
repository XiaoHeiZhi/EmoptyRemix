import type { LinksFunction, MetaFunction } from "@remix-run/node";
import stylesheet from "~/tailwind.css";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesheet },
];

export default function Index() {
  return (
    <div>Hello World!</div>
  );
}
