import {
  redirect,
  type LoaderFunction,
  type V2_MetaFunction,
  json,
} from "@remix-run/node";
import Advertisement from "~/components/Advertisement";
import Contact_select from "~/components/Contact_select";
import Header from "~/components/Header";
import Send_button from "~/components/Send_button";
import { get_session_user_id, require_user_id } from "~/utils/session.server";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const loader: LoaderFunction = async ({ request }) => {
  await require_user_id(request)

  return json({});
};

export default function Index() {
  return (
    <div className="h-full flex flex-col justify-between">
      <Header />

      <div className="m-auto flex gap-5 flex-col items-center self-center">
        <Contact_select />
        <h2 className="text-2xl">to</h2>
        <Send_button />
      </div>

      <Advertisement />
    </div>
  );
}
