"use client";
import { Textarea, TextareaProps } from "@headlessui/react";

export default function MultilineTextInput(props: TextareaProps) {
  return (
    <Textarea
      className={`${props.className} shadow-md bg-slate-400 dark:bg-slate-600 rounded px-2 py-1 flex-1 placeholder:text-body data-invalid:bg-red-400 data-invalid:dark:bg-red-600 focus:outline-none focus-visible:ring-2`}
      {...props} // Spread the rest of the props to allow for additional attributes
    />
  );
}
