import * as Form from "@radix-ui/react-form";
import type { ActionFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { create_user } from "~/models/user.server";
import { create_user_session } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  if (request.method === "POST") {
    const form_data = await request.formData();

    const username = form_data.get("username") as string;
    const password = form_data.get("password") as string;

    const new_user = await create_user(username, password);

    return create_user_session({
      request,
      user_id: new_user.id,
    });
  }
};

const register_page = () => {
  return (
    <div className="h-full bg-blue-700">
      <Form.Root
        className="m-auto w-[260px] pt-20"
        method="POST"
      >
        <Form.Field
          className="grid mb-[10px]"
          name="username"
        >
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Username
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your Username
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              id="username"
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex h-[35px] appearance-none items-center justify-center rounded-[4px] px-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9"
              name="username"
              autoComplete="username"
              type="text"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Field
          className="grid mb-[10px]"
          name="password"
        >
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Password
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter your password
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
              type="password"
              name="password"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            type="submit"
            className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          >
            Register
          </button>
        </Form.Submit>
        <Link to="/login">
          <button className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]">
            Login
          </button>
        </Link>
      </Form.Root>
    </div>
  );
};

export default register_page;
