import React from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

const Select_item = React.forwardRef(({ children, ...props }, forwardedRef) => {
  return (
    <Select.Item
      className="text-xl leading-none text-violet11 rounded-[3px] flex items-center h-[25px] pr-[35px] pl-[25px] relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1"
      {...props}
      ref={forwardedRef}
    >
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="absolute left-0 w-[25px] inline-flex items-center justify-center capitalize">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default Select_item;
