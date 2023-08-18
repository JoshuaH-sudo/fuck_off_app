import {
  redirect,
  type ActionArgs,
  type LoaderFunction,
} from "@remix-run/node";
import { logout } from "~/utils/session.server";

export async function action({ request }: ActionArgs) {
  return logout(request);
}

export const loader: LoaderFunction = async ({ request }) => {
  return redirect("/");
};
