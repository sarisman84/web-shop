"use client";
import { Input } from "@headlessui/react";
import { TextInputProps } from "./TextInput.props";

export default function TextInput(props: TextInputProps) {
  return (
    <Input
      className={`${props.className} bg-slate-400 dark:bg-slate-600 rounded px-2 py-1 flex-1 placeholder:text-body data-invalid:bg-red-400 data-invalid:dark:bg-red-600`}
      type={props.type}
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
      placeholder={props.placeholder}
      name={props.name}
      required={props.required}
      invalid={props.invalid}
    />
  );
}
