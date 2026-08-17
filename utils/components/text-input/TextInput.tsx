import { Input } from "@headlessui/react";
import { TextInputProps } from "./TextInput.props";

export default function TextInput(props: TextInputProps) {
  return (
    <Input
      className={`${props.className} border border-slate-800 dark:border-slate-300 rounded px-2 py-1 flex-1 placeholder:text-body data-invalid:text-red-700 data-invalid:dark:text-red-300`}
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
