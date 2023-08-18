import { redirect, createCookieSessionStorage } from "@remix-run/node";
import { get_user_by_id } from "~/models/user.server";

const session_storage = createCookieSessionStorage({
  cookie: {
    name: "__session",
    httpOnly: true,
    path: "/",
    sameSite: "lax",
    secrets: [process.env.SESSION_SECRET],
    secure: process.env.NODE_ENV === "production",
  },
});

async function get_session(request: Request) {
  const cookie = request.headers.get("Cookie");
  return session_storage.getSession(cookie);
}

export async function get_session_user_id(request: Request): Promise<string> {
  const session = await get_session(request);

  const user_id = session.get("user_id");

  return user_id;
}

export async function get_user_info(request: Request) {
  const user_id = await get_session_user_id(request);
  if (user_id === undefined) return null;

  const user = await get_user_by_id(user_id);
  if (user) return user;

  throw await logout(request);
}

export async function require_user_id(request: Request) {
  const userId = await get_session_user_id(request);
  if (!userId) {
    throw redirect("/login");
  }
  return userId;
}

export async function create_user_session({
  request,
  user_id,
}: {
  request: Request;
  user_id: string;
}) {
  const session = await get_session(request);

  session.set("user_id", user_id);

  return redirect("/", {
    headers: {
      "Set-Cookie": await session_storage.commitSession(session, {
        maxAge: 60 * 60 * 24 * 7, // 7 days,
      }),
    },
  });
}

export async function logout(request: Request) {
  const session = await get_session(request);
  return redirect("/login", {
    headers: {
      "Set-Cookie": await session_storage.destroySession(session),
    },
  });
}
