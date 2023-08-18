import * as Form from "@radix-ui/react-form";
import {
  type LoaderFunction,
  type ActionFunction,
  json,
  redirect,
} from "@remix-run/node";
import Header from "~/components/Header";
import { create_contact } from "~/models/contact.server";
import { get_session_user_id, require_user_id } from "~/utils/session.server";

export const action: ActionFunction = async ({ request }) => {
  const user_id = await get_session_user_id(request);

  if (request.method === "POST") {
    const form_data = await request.formData();
    const name = form_data.get("name") as string;

    await create_contact(name, user_id);
    return redirect("/")
  }

  return null;
};

export const loader: LoaderFunction = async ({ request }) => {
  await require_user_id(request);

  return json({});
};

const Add_contact = () => {
  return (
    <div className="h-full bg-blue-700">
      <Header/>
      <h1 className="text-2xl text-white font-bold text-center">Add New Contact</h1>

      <Form.Root
        className="m-auto w-[260px] pt-20"
        method="POST"
      >
        <Form.Field
          className="grid mb-[10px]"
          name="name"
        >
          <div className="flex items-baseline justify-between">
            <Form.Label className="text-[15px] font-medium leading-[35px] text-white">
              Name
            </Form.Label>
            <Form.Message
              className="text-[13px] text-white opacity-[0.8]"
              match="valueMissing"
            >
              Please enter the contact name
            </Form.Message>
          </div>
          <Form.Control asChild>
            <input
              className="box-border w-full bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] p-[10px] text-[15px] leading-none text-white shadow-[0_0_0_1px] outline-none hover:shadow-[0_0_0_1px_black] focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9 resize-none"
              type="text"
              name="name"
              required
            />
          </Form.Control>
        </Form.Field>
        <Form.Submit asChild>
          <button
            type="submit"
            className="box-border w-full text-violet11 shadow-blackA7 hover:bg-mauve3 inline-flex h-[35px] items-center justify-center rounded-[4px] bg-white px-[15px] font-medium leading-none shadow-[0_2px_10px] focus:shadow-[0_0_0_2px] focus:shadow-black focus:outline-none mt-[10px]"
          >
            Add
          </button>
        </Form.Submit>
      </Form.Root>
    </div>
  );
};

export default Add_contact;
