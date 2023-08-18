import {
  ChevronDownIcon,
  ChevronUpIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import type { FC } from "react";
import * as Select from "@radix-ui/react-select";
import Select_item from "./Select_item";
import { Link } from "@remix-run/react";
import { useMatchesData } from "~/utils/tools";

const Contact_select: FC = () => {
  const data = useMatchesData("root");
  const contacts = data?.user?.contacts ?? []

  console.log(contacts)

  return (
    <div className="flex gap-2">
      <h2 className="text-2xl">Tell,</h2>
      <Select.Root>
        <Select.Trigger
          className="inline-flex items-center justify-center rounded px-[15px] text-2xl leading-none h-[35px] gap-[5px] bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none"
          aria-label="Contacts"
        >
          <Select.Value placeholder="Contact" />
          <Select.Icon className="text-violet11">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <Select.ScrollUpButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronUpIcon />
            </Select.ScrollUpButton>

            <Select.Viewport className="p-[5px]">
              <Select.Group>
                <Select.Label className="px-[25px] text-xs leading-[25px] text-mauve11">
                  Contacts
                </Select.Label>
                {contacts.map((contact) => (
                  <Select_item value={contact.name}>{contact.name}</Select_item>
                ))}
              </Select.Group>
            </Select.Viewport>

            <Select.ScrollDownButton className="flex items-center justify-center h-[25px] bg-white text-violet11 cursor-default">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>

      <Link to="/add_contact">
        <div className="rounded-xl bg-green-500 hover:bg-green-600 p-2">
          <PlusIcon
            height={15}
            width={15}
          />
        </div>
      </Link>
    </div>
  );
};

export default Contact_select;
