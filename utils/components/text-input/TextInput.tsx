"use client";
import { Input, InputProps } from "@headlessui/react";

export default function TextInput(props: InputProps) {
  return (
    <Input
      className={`${props.className} bg-slate-400 dark:bg-slate-600 rounded px-2 py-1 flex-1 placeholder:text-body data-invalid:bg-red-400 data-invalid:dark:bg-red-600`}
      {...props} // Spread the rest of the props to allow for additional attributes
    />
  );
}
