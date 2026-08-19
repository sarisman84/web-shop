"use client";
import { Textarea, TextareaProps } from "@headlessui/react";

export default function MultilineTextInput(props: TextareaProps) {
  return (
    <Textarea
      className={`${props.className}bg-slate-400 dark:bg-slate-600 rounded px-2 py-1 flex-1 data-invalid:bg-red-400 data-invalid:dark:bg-red-600`}
      {...props} // Spread the rest of the props to allow for additional attributes
    />
  );
}
