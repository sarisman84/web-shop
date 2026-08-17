"use client";
import { Textarea } from "@headlessui/react";
import { MultilineTextInputProps } from "./MultilineTextInput.props";

export default function MultilineTextInput(props: MultilineTextInputProps) {
  return (
    <Textarea
      className={`${props.className}bg-slate-400 dark:bg-slate-600 rounded px-2 py-1 flex-1 data-invalid:bg-red-400 data-invalid:dark:bg-red-600`}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      name={props.name}
      required={props.required}
      invalid={props.invalid}
    />
  );
}
